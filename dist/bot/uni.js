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
const grammy_1 = require("grammy");
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = __importDefault(require("./helpers/errorHandler"));
const api = __importStar(require("../api/spotActions"));
const winston_1 = __importDefault(require("../winston"));
const start_1 = __importDefault(require("./helpers/start"));
dotenv_1.default.config();
const uniBotApiKey = process.env.UNI_BOT_API_KEY;
const uniBot = () => {
    winston_1.default.fn('uniBot');
    const bot = new grammy_1.Bot(uniBotApiKey);
    // ------ Hears:
    bot.hears([/Yo/, /yo/, /yo /, /Yo /], (ctx) => __awaiter(void 0, void 0, void 0, function* () { return yield ctx.reply(`Yo! What's Up man?`); }));
    bot.api.setMyCommands([
        { command: 'info', description: 'Info' },
        { command: 'get_all', description: 'Get all actions' },
        { command: 'get_by_id', description: 'Get action by id' },
        { command: 'get_by_sym', description: 'Get action by Symbol' }
    ]);
    /*
    bot.command(['say_hi', 'hello', 'hi'], async ctx => {
      ctx.reply('Hello!');
    });
    
    bot.command('bot_name', async ctx => {
      await ctx.reply(`My name is UNI!`);
    });
    */
    bot.command('start', (ctx) => __awaiter(void 0, void 0, void 0, function* () { return (0, start_1.default)(ctx); }));
    bot.command('get_all', (ctx) => __awaiter(void 0, void 0, void 0, function* () { return api.getActions(ctx); }));
    bot.command('get_by_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () { return api.getActionByID(ctx); }));
    bot.command('get_by_sym', (ctx) => __awaiter(void 0, void 0, void 0, function* () { return api.getActionBySymbol(ctx); }));
    /*
    bot.command('info', async ctx => userInfo(ctx));
    */
    /*
    bot.on('msg').filter(
      ctx => `${ctx.from.id}` === process.env.TELEGRAM_ADMIN_ID,
      async ctx => ctx.reply('Hi Admin!')
      );
      
      bot.on('msg', async ctx => {
        await ctx.reply(`bla bla bla`);
        });
        */
    bot.catch(e => (0, errorHandler_1.default)(e));
    bot.start();
};
exports.default = uniBot;
//# sourceMappingURL=uni.js.map