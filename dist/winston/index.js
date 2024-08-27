"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
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
winston_1.default.addColors(customLevels.colors);
const transports = [
    new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf(({ level, message, newline }) => {
            return level.includes('info') || level.includes('error')
                ? newline
                    ? `${message}\n`
                    : `${message}`
                : newline
                    ? `${level} ${message}\n`
                    : `${level} ${message}`;
        }))
    })
];
const logger = winston_1.default.createLogger({
    levels: customLevels.levels,
    level: '*',
    transports: transports
});
const template = (level, text, newline) => logger.log({ level, message: text, newline });
exports.default = {
    fn: (msg, n = true) => template('*', msg, n),
    info: (msg, n = false) => template('info', msg, n),
    err: (msg, n = false) => template('error', msg, n)
};
/* ------ how to use:

w.fn('getActions', true);
w.info('iiiiii', false);
w.err('eeeee');

*/
//# sourceMappingURL=index.js.map