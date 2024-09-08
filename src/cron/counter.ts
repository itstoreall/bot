import cron from 'node-cron';
import cache from '../cache/counter';
import w from '../winston';
require('dotenv').config();

const key = 'count';

let count = 0;

const incrementCount = () => {
  const cachedValue = cache.get(key);
  w.info(`counter: ${cachedValue ?? 0}`);

  count += 1;
  cache.set(key, count);
};

const start = () => {
  cron.schedule('*/60 * * * * *', incrementCount);
};

export default { start };
