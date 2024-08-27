import winston from 'winston';

type Loger = {
  fn: (msg: string, n?: boolean) => void;
  info: (msg: string, n?: boolean) => void;
  err: (msg: string, n?: boolean) => void;
};

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
      winston.format.printf(({ level, message, newline }) => {
        return level.includes('info') || level.includes('error')
          ? newline
            ? `${message}\n`
            : `${message}`
          : newline
          ? `${level} ${message}\n`
          : `${level} ${message}`;
      })
    )
  })
];

const logger = winston.createLogger({
  levels: customLevels.levels,
  level: '*',
  transports: transports
});

const template = (level: string, text: string, newline: boolean) =>
  logger.log({ level, message: text, newline });

export default {
  fn: (msg, n = true) => template('*', msg, n),
  info: (msg, n = false) => template('info', msg, n),
  err: (msg, n = false) => template('error', msg, n)
} as Loger;

/* ------ how to use:

w.fn('getActions', true);
w.info('iiiiii', false);
w.err('eeeee');

*/
