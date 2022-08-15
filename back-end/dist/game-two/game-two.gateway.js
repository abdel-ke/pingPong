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
exports.GameTwoGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const game_two_service_1 = require("./game-two.service");
const socket_io_1 = require("socket.io");
let GameTwoGateway = class GameTwoGateway {
    constructor(gameTwoService) {
        this.gameTwoService = gameTwoService;
    }
    afterInit() {
        console.log('Websocket Server Started,Listening on Port:3000');
    }
    handleConnection(client) {
        const state = this.game.createGameState();
        if (state)
            console.log("state", state);
        else
            console.log("state is null");
        this.gameTwoService.startGameInterval(client, state);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], GameTwoGateway.prototype, "server", void 0);
GameTwoGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [game_two_service_1.GameTwoService])
], GameTwoGateway);
exports.GameTwoGateway = GameTwoGateway;
//# sourceMappingURL=game-two.gateway.js.map