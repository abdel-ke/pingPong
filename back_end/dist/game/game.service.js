"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const client_1 = require("@prisma/client");
let GameService = class GameService {
    constructor(prisma) {
        this.prisma = prisma;
        this.state = {};
        this.clientRooms = {};
        this.clientSpectating = {};
        this.gameActive = {};
        this.canvasWidth = 600;
        this.canvasHeight = this.canvasWidth / 2;
        this.playerDisconnected = {};
        this.starting = (server, state, roomName) => {
            let count = 3;
            const int = setInterval(() => {
                server.in(roomName).emit('start');
                count--;
                if (count === 0) {
                    clearInterval(int);
                    this.startGameInterval(server, state, roomName);
                }
            }, 1500);
        };
        this.startGameInterval = (server, state, roomName) => {
            const interval = setInterval(async () => {
                const winner = this.gameloop(state[roomName]);
                const stateRoom = state[roomName];
                if (this.gameActive[roomName]) {
                    if (!winner) {
                        this.emitGameState(server, stateRoom, roomName);
                    }
                    else {
                        clearInterval(interval);
                        this.gameActive[roomName] = false;
                        this.emitGameOver(server, roomName, winner);
                        await this.prisma.match.create({
                            data: {
                                player_one: stateRoom.playerOne.id,
                                player_two: stateRoom.playerTwo.id,
                                player_one_score: stateRoom.playerOne.score,
                                player_two_score: stateRoom.playerTwo.score,
                            }
                        });
                    }
                }
                else {
                    console.log(`player[] ${this.playerDisconnected[roomName]} was disconnected`);
                    this.emitPlayerDesconnected(server, roomName, this.playerDisconnected[roomName]);
                    clearInterval(interval);
                    await this.prisma.match.create({
                        data: {
                            player_one: stateRoom.playerOne.id,
                            player_two: stateRoom.playerTwo.id,
                            player_one_score: stateRoom.playerOne.score,
                            player_two_score: stateRoom.playerTwo.score,
                        }
                    });
                }
            }, 1000 / constants_1.FRAMERATE);
        };
        this.cp = 1;
        this.wait = false;
    }
    createGameState() {
        return {
            playerOne: {
                id: 'playerOne',
                name: '',
                x: 0,
                y: (this.canvasHeight - 100) / 2,
                width: 10,
                height: 100,
                color: 'white',
                score: 0,
            },
            playerTwo: {
                id: 'playerTwo',
                name: '',
                x: this.canvasWidth - 10,
                y: (this.canvasHeight - 100) / 2,
                width: 10,
                height: 100,
                color: 'white',
                score: 0,
            },
            ball: {
                x: this.canvasWidth / 2,
                y: this.canvasHeight / 2,
                radius: this.canvasHeight * 0.02,
                speed: 7,
                velocityX: 7,
                velocityY: 7,
                color: "white"
            }
        };
    }
    hasCollision(ball, player) {
        return ball.x + ball.radius > player.x &&
            ball.x - ball.radius < player.x + player.width &&
            ball.y + ball.radius > player.y &&
            ball.y - ball.radius < player.y + player.height;
    }
    collision(b, p) {
        p.top = p.y;
        p.bottom = p.y + p.height;
        p.left = p.x;
        p.right = p.x + p.width;
        b.top = b.y - b.radius;
        b.bottom = b.y + b.radius;
        b.left = b.x - b.radius;
        b.right = b.x + b.radius;
        return (b.right >= p.left && b.bottom >= p.top && b.left <= p.right && b.top <= p.bottom);
    }
    resetBall(state) {
        state.ball.x = this.canvasWidth / 2;
        state.ball.y = this.canvasHeight / 2;
        state.ball.speed = 7;
        state.ball.velocityX = -state.ball.velocityX;
    }
    gameloop(state) {
        if (!state)
            return;
        const playerOne = state.playerOne;
        const playerTwo = state.playerTwo;
        const ball = state.ball;
        if (ball.x - ball.radius < 0) {
            playerTwo.score++;
            this.resetBall(state);
        }
        else if (ball.x + ball.radius > this.canvasWidth) {
            playerOne.score++;
            this.resetBall(state);
        }
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > this.canvasHeight)
            ball.velocityY = -ball.velocityY;
        let player = (ball.x + ball.radius < this.canvasWidth / 2) ? playerOne : playerTwo;
        if (this.collision(ball, player)) {
            let collidPoint = ball.y - (player.y + player.height / 2);
            collidPoint /= player.height / 2;
            let angleRad = collidPoint * (Math.PI / 4);
            let direction = (ball.x + ball.radius < this.canvasWidth / 2) ? 1 : -1;
            ball.velocityX = direction * ball.speed * Math.cos(angleRad);
            ball.velocityY = ball.speed * Math.sin(angleRad);
            ball.speed += 0.1;
        }
        if (playerOne.score == 2)
            return 1;
        if (playerTwo.score == 2)
            return 2;
        return false;
    }
    handleKeyDown(keyCode) {
        try {
            const key = parseInt(keyCode);
            switch (key) {
                case 87:
                    return -1;
                case 83:
                    return 1;
                default:
                    return 0;
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    updatePlayer(client, state, ret) {
        const roomName = this.clientRooms[client.id];
        if (!roomName || !this.gameActive[roomName])
            return;
        if (this.state[roomName].playerOne.id === client.id)
            this.updatePlayerOne(state[roomName], ret);
        else
            this.updatePlayerTwo(state[roomName], ret);
    }
    updatePlayerOne(state, ret) {
        if (ret == 1) {
            if (state.playerOne.y + 115 > this.canvasHeight)
                state.playerOne.y = this.canvasHeight - 100;
            else
                state.playerOne.y += 15;
        }
        else if (ret == -1) {
            if (state.playerOne.y < 15)
                state.playerOne.y = 0;
            else
                state.playerOne.y -= 15;
        }
    }
    updatePlayerTwo(state, ret) {
        if (ret == 1) {
            if (state.playerTwo.y + 115 > this.canvasHeight)
                state.playerTwo.y = this.canvasHeight - 100;
            else
                state.playerTwo.y += 15;
        }
        else if (ret == -1) {
            if (state.playerTwo.y < 15)
                state.playerTwo.y = 0;
            else
                state.playerTwo.y -= 15;
        }
    }
    handleNewGame(client, name) {
        let roomName = Math.floor(Math.random() * 1000000);
        this.clientRooms[client.id] = roomName;
        this.roomName = roomName;
        client.emit('gameCode', roomName);
        this.state[roomName] = this.createGameState();
        this.state[roomName].playerOne.id = client.id;
        this.state[roomName].playerOne.name = name;
        client.join(roomName.toString());
        client.emit('init', 1);
    }
    handleJoinGame(server, client, gameCode, name) {
        let room;
        if (!gameCode)
            return;
        this.gameActive[gameCode] = true;
        server.sockets.adapter.rooms.get(gameCode).forEach((value) => room = value);
        let allUsers;
        if (room) {
            allUsers = server.sockets;
        }
        let numClients = 0;
        if (allUsers) {
            numClients = server.engine.clientsCount;
        }
        if (numClients === 0) {
            client.emit('unknownGame');
            return;
        }
        this.clientRooms[client.id] = gameCode;
        client.join(gameCode);
        this.state[gameCode].playerTwo.id = client.id;
        this.state[gameCode].playerTwo.name = name;
        client.emit('init', 2);
        this.starting(server, this.state, gameCode);
    }
    handlePlayGame(server, client) {
        if (this.cp % 2 != 0) {
            this.handleNewGame(client, "");
            console.log("First => cp: ", this.cp, " toomName: ", this.roomName);
            this.cp++;
            this.wait = true;
            const interval = setInterval(() => {
                server.in(this.roomName.toString()).emit('waiting');
                if (!this.wait)
                    clearInterval(interval);
            }, 500);
        }
        else {
            console.log("second => cp: ", this.cp, " roomName: ", this.roomName);
            this.handleJoinGame(server, client, this.roomName.toString(), "");
            this.cp++;
            this.wait = false;
        }
    }
    handleSpectateGame(server, client, gameCode) {
        let room;
        if (!gameCode)
            return;
        server.sockets.adapter.rooms.get(gameCode).forEach((value) => room = value);
        this.clientSpectating[client.id] = gameCode;
        setInterval(() => {
            const state = this.state[gameCode];
            server.emit("spectateState", JSON.stringify(state));
        }, 1000 / constants_1.FRAMERATE);
    }
    emitGameState(server, gameState, roomName) {
        server.sockets.in(roomName).emit("gameState", JSON.stringify(gameState));
    }
    emitGameOver(server, roomName, winner) {
        console.log("Over gameActive", this.gameActive);
        server.in(roomName).emit('gameOver', JSON.stringify(winner));
    }
    emitPlayerDesconnected(server, roomName, winner) {
        server.in(roomName).emit('playerDisconnected', JSON.stringify(winner));
    }
};
GameService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map