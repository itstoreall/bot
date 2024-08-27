"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApp = exports.corsCheck = exports.isLocal = void 0;
const os_1 = __importDefault(require("os"));
const gc = __importStar(require("../config/global"));
const corsOrigin = process.env.CORS_ORIGIN;
const { kaomoji } = gc.system;
// ------ is:
const isLocal = () => os_1.default.hostname().split('.').pop() === 'local';
exports.isLocal = isLocal;
// ------ cors:
const corsCheck = (origin) => corsOrigin === null || corsOrigin === void 0 ? void 0 : corsOrigin.split(',').includes(origin);
exports.corsCheck = corsCheck;
// ------ App (Express):
const initApp = (args) => {
    return !(0, exports.corsCheck)(args.req.headers.origin)
        ? args.res.status(403).send(`bot ${kaomoji} server`)
        : args.next();
};
exports.initApp = initApp;
//# sourceMappingURL=global.js.map