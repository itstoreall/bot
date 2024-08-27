import os from 'os';
import mongoose from 'mongoose';
import w from '../winston';
import trishaBot from '../bot/trisha';
import * as gc from '../config/global';
import * as gt from '../types/global';
import * as gu from './global';

const { kaomoji, host } = gc.system;
const dev = `${kaomoji} http://${host.local}`;
const prod = `http://${os.hostname()}`;

// ------ db:

const dbCheck = (mongoose: any) => {
  const isConnected = mongoose.connection.readyState === 2;
  return { isConnected, db: isConnected ? 'mongodb' : 'no db' };
};

// ------ Server:

const starter: gt.RunServer = async port => {
  w.fn('starter');
  trishaBot();
  const dbName = dbCheck(mongoose).db;
  w.info(`  bot ${gu.isLocal() ? dev : prod}:${port} -> ${dbName} `);
};

export default starter;
