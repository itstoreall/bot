"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const counter_1 = __importDefault(require("../cache/counter"));
const winston_1 = __importDefault(require("../winston"));
require('dotenv').config();
const key = 'count';
let count = 0;
const incrementCount = () => {
    const cachedValue = counter_1.default.get(key);
    winston_1.default.info(`counter: ${cachedValue !== null && cachedValue !== void 0 ? cachedValue : 0}`);
    count += 1;
    counter_1.default.set(key, count);
};
const start = () => {
    node_cron_1.default.schedule('*/10 * * * * *', incrementCount);
};
exports.default = { start };
//# sourceMappingURL=counter.js.map