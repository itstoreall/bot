"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default({ stdTTL: 100, checkperiod: 120 });
const get = (key) => cache.get(key);
const set = (key, val) => cache.set(key, val);
exports.default = { get, set };
//# sourceMappingURL=counter.js.map