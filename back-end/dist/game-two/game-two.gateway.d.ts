import { GameTwoService } from './game-two.service';
import { Server, Socket } from 'socket.io';
export declare class GameTwoGateway {
    private readonly gameTwoService;
    server: Server;
    constructor(gameTwoService: GameTwoService);
    afterInit(): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleKeyDown(keyCode: number, client: Socket): void;
    handleNewGame(client: Socket): void;
    handleJoinGame(gameCode: string, client: Socket): void;
    handleCanvaSize(data: any): void;
}
