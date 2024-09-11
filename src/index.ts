import ex, { Request, Response, NextFunction } from 'express';
import { createServer } from 'http';
import starter from './utils/starter';
import * as gc from './config/global';
import * as gt from './types/global';
import * as gu from './utils/global';

const { kaomoji } = gc.system;

const app: ex.Express = ex();
const port = process.env.PORT || 4001;

app.get('/ping', gu.authCheck, async (_, res: Response) => gu.ping(res));

app.use((_, res) => res.status(200).send(`bot ${kaomoji} server`));
const server: gt.HttpServer = createServer(app);
server.listen({ port }, () => starter(String(port)));

app.use((e: Error, _: Request, res: Response, __: NextFunction) => {
  const msg = e.message || 'Internal Server Error';
  return res.status(500).json({ error: msg });
});
