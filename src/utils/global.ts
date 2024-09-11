import os from 'os';
import ex from 'express';
import axios from 'axios';
// import * as dotenv from 'dotenv';
import * as gc from '../config/global';
import * as gt from '../types/global';
import w from '../winston';
// dotenv.config();

const corsOrigin = process.env.CORS_ORIGIN;
const pingUrl = process.env.PING_URL;
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

export const authCheck: gt.Middleware = (req, res, next) => {
  const adminId = process.env.TELEGRAM_ADMIN_ID;
  const auth = req.headers.authorization.split(' ');
  auth.length === 2 && auth[1] !== adminId
    ? res.status(403).json({ error: 'Authorization is invalid' })
    : next();
};

// ------ Ping:

export const ping = async (res: ex.Response) => {
  let pingPong = 'ping ';

  try {
    const pingRes = await axios.get(`${pingUrl}/ping`);

    if (pingRes && pingRes.data) {
      pingPong += pingRes.data;
      res.send(pingRes.data);
    }
  } catch (e) {
    res.status(500).send(`ERROR ping: ${e.message}`);
  }

  w.info(pingPong);
};
