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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = exports.authCheck = exports.initApp = exports.corsCheck = exports.isLocal = void 0;
const os_1 = __importDefault(require("os"));
const axios_1 = __importDefault(require("axios"));
// import * as dotenv from 'dotenv';
const gc = __importStar(require("../config/global"));
const winston_1 = __importDefault(require("../winston"));
// dotenv.config();
const corsOrigin = process.env.CORS_ORIGIN;
const pingUrl = process.env.PING_URL;
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
        ? args.res.status(200).send(`bot ${kaomoji} server`)
        : args.next();
};
exports.initApp = initApp;
const authCheck = (req, res, next) => {
    const adminId = process.env.TELEGRAM_ADMIN_ID;
    const auth = req.headers.authorization.split(' ');
    auth.length === 2 && auth[1] !== adminId
        ? res.status(403).json({ error: 'Authorization is invalid' })
        : next();
};
exports.authCheck = authCheck;
// ------ Ping:
const ping = (res) => __awaiter(void 0, void 0, void 0, function* () {
    let pingPong = 'ping ';
    try {
        const pingRes = yield axios_1.default.get(`${pingUrl}/ping`);
        if (pingRes && pingRes.data) {
            pingPong += pingRes.data;
            res.send(pingRes.data);
        }
    }
    catch (e) {
        res.status(500).send(`ERROR ping: ${e.message}`);
    }
    winston_1.default.info(pingPong);
});
exports.ping = ping;
//# sourceMappingURL=global.js.map