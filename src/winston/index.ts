import winston from 'winston';

type Log = (msg: string, it?: boolean, ib?: boolean) => void;

type Loger = {
  fn: Log;
  info: Log;
  err: Log;
};

type Template = (
  level: string,
  text: string,
  isTop: boolean,
  isBottom: boolean
) => winston.Logger;

// ---

const customLevels = {
  levels: {
    error: 0,
    info: 1,
    '*': 2
  },
  colors: {
    error: 'red',
    info: 'green',
    '*': 'white'
  }
};

winston.addColors(customLevels.colors);

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.printf(({ level, message, isTop, isBottom }) => {
        const setLine = (v: boolean) => (v ? '\n' : '');
        return level.includes('info') || level.includes('error')
          ? `${setLine(isTop)}${message}${setLine(isBottom)}`
          : `${setLine(isTop)}${level} ${message}${setLine(isBottom)}`;
      })
    )
  })
];

const logger = winston.createLogger({
  levels: customLevels.levels,
  level: '*',
  transports: transports
});

const template: Template = (level, text, isTop, isBottom) =>
  logger.log({ level, message: text, isTop, isBottom });

export default {
  fn: (msg, it = false, ib = false) => template('*', msg, it, ib),
  info: (msg, it = false, ib = false) => template('info', msg, it, ib),
  err: (msg, it = false, ib = false) => template('error', msg, it, ib)
} as Loger;

/* ------ how to use:

w.fn('getActions', false, true);
w.info('iiiiii', true);
w.err('eeeee');

*/
