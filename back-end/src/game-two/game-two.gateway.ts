import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { GameTwoService } from './game-two.service';
import { Server, Socket } from 'socket.io';
import { canvasHeight, canvasWidth } from './constants';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GameTwoGateway {
 
  @WebSocketServer()
  server: Server;
  constructor(private readonly  gameTwoService: GameTwoService) {}

  afterInit() {
    console.log('Websocket Server Started,Listening on Port:3000');
  }

  handleConnection(client: Socket) {
    // console.log(`Client connected: ${client.id}`);
    client.emit('init', {data: 'Welcome to the game'});
    const state = this.gameTwoService.createGameState();
    this.gameTwoService.startGameInterval(client, state);
  }
  
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
