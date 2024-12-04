import { Server, Socket } from 'socket.io';
interface typeMessage {
    message: string;
    from: string;
    to: string;
}
export declare class ServerSocket {
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleEvent(data: typeMessage): void;
}
export {};
