import ex from 'express';
import { createServer } from 'http';
import starter from './utils/starter';
import * as gt from './types/global';
import * as gu from './utils/global';

const app: ex.Express = ex();
const port = process.env.PORT || 4001;

app.use((req, res, next) => gu.initApp({ req, res, next }));

const server: gt.HttpServer = createServer(app);

server.listen({ port }, () => starter(String(port)));

app.use((e: Error, _: ex.Request, res: ex.Response, __: ex.NextFunction) => {
  const msg = e.message || 'Internal Server Error';
  return res.status(500).json({ error: msg });
});
