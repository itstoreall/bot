"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
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
winston_1.default.addColors(customLevels.colors);
const transports = [
    new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf(({ level, message, isTop, isBottom }) => {
            const setLine = (v) => (v ? '\n' : '');
            return level.includes('info') || level.includes('error')
                ? `${setLine(isTop)}${message}${setLine(isBottom)}`
                : `${setLine(isTop)}${level} ${message}${setLine(isBottom)}`;
        }))
    })
];
const logger = winston_1.default.createLogger({
    levels: customLevels.levels,
    level: '*',
    transports: transports
});
const template = (level, text, isTop, isBottom) => logger.log({ level, message: text, isTop, isBottom });
exports.default = {
    fn: (msg, it = false, ib = false) => template('*', msg, it, ib),
    info: (msg, it = false, ib = false) => template('info', msg, it, ib),
    err: (msg, it = false, ib = false) => template('error', msg, it, ib)
};
/* ------ how to use:

w.fn('getActions', false, true);
w.info('iiiiii', true);
w.err('eeeee');

*/
//# sourceMappingURL=index.js.map