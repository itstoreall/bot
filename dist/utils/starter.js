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
const os_1 = __importDefault(require("os"));
const mongoose_1 = __importDefault(require("mongoose"));
const winston_1 = __importDefault(require("../winston"));
// import trishaBot from '../bot/trisha'; // *
const counter_1 = __importDefault(require("../cron/counter"));
const uni_1 = __importDefault(require("../bot/uni"));
const gc = __importStar(require("../config/global"));
const gu = __importStar(require("./global"));
const { kaomoji, host } = gc.system;
const dev = `${kaomoji} http://${host.local}`;
const prod = `http://${os_1.default.hostname()}`;
// ------ db:
const dbCheck = (mongoose) => {
    const isConnected = mongoose.connection.readyState === 2;
    return { isConnected, db: isConnected ? 'mongodb' : 'no db' };
};
// ------ Server:
const starter = (port) => __awaiter(void 0, void 0, void 0, function* () {
    const dbName = dbCheck(mongoose_1.default).db;
    const starterMsg = `  bot ${gu.isLocal() ? dev : prod}:${port} -> ${dbName} `;
    winston_1.default.info(starterMsg, true, true);
    counter_1.default.start();
    (0, uni_1.default)();
    // trishaBot();
});
exports.default = starter;
//# sourceMappingURL=starter.js.map