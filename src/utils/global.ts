import os from 'os';
import * as gc from '../config/global';
import * as gt from '../types/global';

const corsOrigin = process.env.CORS_ORIGIN;
const { kaomoji } = gc.system;

// ------ is:

export const isLocal = () => os.hostname().split('.').pop() === 'local';

// ------ cors:

export const corsCheck = (origin: string) =>
  corsOrigin?.split(',').includes(origin);

// ------ App (Express):

export const initApp = (args: gt.ReqArgs) => {
  return !corsCheck(args.req.headers.origin!)
    ? args.res.status(200).send(`bot ${kaomoji} server`)
    : args.next();
};
