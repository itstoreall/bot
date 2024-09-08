import NC from 'node-cache';

const cache = new NC({ stdTTL: 100, checkperiod: 120 });

const get = (key: string) => cache.get(key);

const set = (key: string, val: number) => cache.set(key, val);

export default { get, set };
