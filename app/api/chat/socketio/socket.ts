import { Server as NetServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';

export interface SocketServer extends NetServer {
   io?: SocketIOServer;
}

export let io: SocketIOServer | null = null;
