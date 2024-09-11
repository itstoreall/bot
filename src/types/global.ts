import { Request, Response, NextFunction } from 'express';
import * as http from 'http';

export type ReqArgs = { req: Request; res: Response; next: NextFunction };

export type HttpServer = http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
>;

export type ExpressArgs = { req: Request; res: Response; next: NextFunction };

export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type RunServer = (port: string) => void;
