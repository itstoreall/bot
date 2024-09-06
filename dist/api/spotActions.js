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
exports.getActionBySymbol = exports.getActionByID = exports.getActions = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("../winston"));
const ge = __importStar(require("../enum/global"));
dotenv_1.default.config();
const uniCorsToken = process.env.UNI_CORS_TOKEN;
const uniServerUlr = `${process.env.UNI_SERVER_URL}/graphql`;
const { BTC } = ge.Symbol;
// ------ gql query paths:
const getActsPath = path_1.default.join(__dirname, '../gql/getActions.gql');
const getActByIDPath = path_1.default.join(__dirname, '../gql/getActionByID.gql');
const getActBySymPath = path_1.default.join(__dirname, '../gql/getActionBySymbol.gql');
const getActions = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(uniServerUlr, { query: fs_1.default.readFileSync(getActsPath, 'utf8') }, { headers: { Authorization: `Bearer ${uniCorsToken}` } });
        const { actions } = response.data.data.getActions;
        console.log('actions:', actions.length);
        yield ctx.reply(`${actions.length} actions`);
    }
    catch (e) {
        winston_1.default.err(`Error fetching actions: ${e}`);
    }
});
exports.getActions = getActions;
const getActionByID = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const id = '66535e783aea7c888f29fdb4';
    try {
        const response = yield axios_1.default.post(uniServerUlr, {
            query: fs_1.default.readFileSync(getActByIDPath, 'utf8'),
            variables: { id }
        }, { headers: { Authorization: `Bearer ${uniCorsToken}` } });
        const action = response.data.data.getActionByID;
        console.log('action:', action);
        yield ctx.reply(`Action details: ${JSON.stringify(action, null, 2)}`);
    }
    catch (e) {
        winston_1.default.err(`Error fetching action by ID: ${e}`);
    }
});
exports.getActionByID = getActionByID;
const getActionBySymbol = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const symbol = BTC;
    try {
        const response = yield axios_1.default.post(uniServerUlr, {
            query: fs_1.default.readFileSync(getActBySymPath, 'utf8'),
            variables: { symbol }
        }, { headers: { Authorization: `Bearer ${uniCorsToken}` } });
        const action = response.data.data.getActionBySymbol;
        console.log('action:', action);
        yield ctx.reply(`Action details: ${JSON.stringify(action, null, 2)}`);
    }
    catch (e) {
        winston_1.default.err(`Error fetching action by Symbol: ${e}`);
    }
});
exports.getActionBySymbol = getActionBySymbol;
//# sourceMappingURL=spotActions.js.map