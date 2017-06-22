// flow-typed signature: f7c9c30ff79d15adc0c848a82a865580
// flow-typed version: <<STUB>>/socket.io_v^2.0.3/flow_v0.48.0

import type { EventsEmitter } from 'events';
import type { Server, Request } from 'http';

declare type io$ServerOptions = {
  path?: string,
  serveClient?: boolean,
  adapter?: any,
  origins?: string,
  allowRequest?: (request: Request, fn: (err: ?number, success: boolean) => void) => void,
  parser?: any,
  pingTimeout?: number,
  pingInterval?: number,
  transports?: Array<string>
};

declare type io$NextFunction = (err?: ?Error) => mixed;
declare type io$Callback = (err?: Error) => void;
declare type io$SocketAckFunction = (data: any) => void;

declare class io$Client {
  conn: any;
  request: Request;
}

declare class io$Socket {
  id: string;
  rooms: { [name: string]: string };
  client: io$Client;
  conn: any;
  request: Request;
  use(fn: (packet: any, next: io$NextFunction) => void): void;
  send(...args?: Array<mixed | io$SocketAckFunction>): io$Socket;
  emit(...args?: Array<mixed | io$SocketAckFunction>): io$Socket;
  on(event: 'disconnect', callback: (reason: string) => void): void;
  on(event: 'error', callback: (error: ?Error) => void): void;
  on(event: 'disconnecting', callback: (reason: string) => void): void;
  on(event: string, callback: Function): void;
  join(room: string, callback?: io$Callback): io$Socket;
  join(rooms: Array<string>, callback?: io$Callback): io$Socket;
  leave(room: string, callback?: io$Callback): io$Socket;
  to(room: string): io$Socket;
  in(room: string): io$Socket;
  compress(value: boolean): io$Socket;
  disconnect(close: boolean): io$Socket;
  broadcast: io$Socket;
  volatile: io$Socket;
}

declare class io$Namespace {
  name: string;
  connected: { [id: string]: io$Socket };
  emit(eventName: string, ...args: Array<mixed>): void;
  clients(callback: (error: Error, clients: Array<string>) => void): void;
  use(fn: (socket: io$Socket, next: io$NextFunction) => void): void;
  on(event: 'connect' | 'connection', fn: (socket: io$Socket) => void): void;
  volatile: io$Namespace;
  local: io$Namespace;
}

declare class io$Server {
  constructor(httpServer: Server, options?: io$ServerOptions): void;
  constructor(port: number, options?: io$ServerOptions): void;
  constructor(options: io$ServerOptions): void;

  sockets: io$Namespace;
  serveClient(value?: boolean): io$Server | boolean;
  path(value?: string): io$Server | string;
  adapter(value?: any): io$Server | any;
  origins(value?: string): io$Server | string;
  origins(fn: (origin: string, callback: (error: Error, success: boolean) => void)): void;
  attach(httpServer: Server, options?: io$ServerOptions): void;
  attach(port: number, options?: io$ServerOptions): void;
  listen(httpServer: Server, options?: io$ServerOptions): void;
  listen(port: number, options?: io$ServerOptions): void;
  bind(engine: any): void;
  onconnection(socket: any): io$Server;
  of(nsp: string): io$Namespace;
  close(callback?: () => void): void;
}

declare module 'socket.io' {
  declare type Server = io$Server;

  declare module.exports: {
    (): io$Server
  };
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'socket.io/lib/client' {
  declare type Client = io$Client;

  declare module.exports: io$Client;
}

declare module 'socket.io/lib/index' {
  declare type Server = io$Server;

  declare module.exports: io$Server;
}

declare module 'socket.io/lib/namespace' {
  declare type Namespace = io$Namespace;

  declare module.exports: io$Namespace;
}

declare module 'socket.io/lib/socket' {
  declare type Socket = io$Socket;

  declare module.exports: io$Socket;
}

// Filename aliases
declare module 'socket.io/lib/client.js' {
  declare module.exports: $Exports < 'socket.io/lib/client' > ;
}
declare module 'socket.io/lib/index.js' {
  declare module.exports: $Exports < 'socket.io/lib/index' > ;
}
declare module 'socket.io/lib/namespace.js' {
  declare module.exports: $Exports < 'socket.io/lib/namespace' > ;
}
declare module 'socket.io/lib/socket.js' {
  declare module.exports: $Exports < 'socket.io/lib/socket' > ;
}
