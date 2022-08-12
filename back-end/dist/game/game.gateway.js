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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const game_service_1 = require("./game.service");
const Socket_io_1 = require("Socket.io");
const SetPlayer_dto_1 = require("./dto/SetPlayer.dto");
let GameGateway = class GameGateway {
    constructor(gameService) {
        this.gameService = gameService;
    }
    setInitPlayer(setPlayerDto, client) {
        console.log("SetPlayerDto ", setPlayerDto);
        const resp = this.gameService.setPlayer(setPlayerDto, client.id);
        client.join(setPlayerDto.matchId.toString());
        if (resp.status === 'first player') {
            return 'first player';
        }
        else {
            this.server.to(resp.match.id.toString()).emit('JoinMatch', resp.match);
            return resp.match;
        }
    }
    JoinMatchServer(setPlayerDto, client) {
        console.log("SetPlayerDto ", setPlayerDto);
        const resp = this.gameService.setPlayer(setPlayerDto, client.id);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Socket_io_1.Server)
], GameGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createGame'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SetPlayer_dto_1.SetPlayerDto,
        Socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GameGateway.prototype, "setInitPlayer", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('JoinMatchServer'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SetPlayer_dto_1.SetPlayerDto,
        Socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], GameGateway.prototype, "JoinMatchServer", null);
GameGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameGateway);
exports.GameGateway = GameGateway;
//# sourceMappingURL=game.gateway.js.map