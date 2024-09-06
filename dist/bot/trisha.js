"use strict";
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
const axios_1 = __importDefault(require("axios"));
const grammy_1 = require("grammy");
const errorHandler_1 = __importDefault(require("./helpers/errorHandler"));
const dotenv_1 = __importDefault(require("dotenv"));
const winston_1 = __importDefault(require("../winston"));
dotenv_1.default.config();
const trishaBotApiKey = process.env.TRISHA_BOT_API_KEY;
const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY;
const city = 'Kyiv';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`;
const trishaBot = () => {
    winston_1.default.fn('trisha bot');
    const bot = new grammy_1.Bot(trishaBotApiKey);
    bot.api.setMyCommands([
        { command: 'menu', description: 'Menu' },
        { command: 'info', description: 'Info' }
    ]);
    bot.command('menu', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        const menuKeyboard = new grammy_1.Keyboard().text('Weather').row().resized();
        yield ctx.reply(`The menu is open`, { reply_markup: menuKeyboard });
    }));
    bot.hears('Weather', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.get(url);
            const weather = `${city}: ${data.main.temp.toFixed()}°C with ${data.weather[0].description}.`;
            yield ctx.reply(weather, { reply_markup: { remove_keyboard: true } });
        }
        catch (e) {
            const err = `ERROR in axios: ${e}`;
            yield ctx.reply(err, { reply_markup: { remove_keyboard: true } });
        }
    }));
    bot.command('info', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        const info = `id: ${ctx.from.id}\nfirstName: ${ctx.from.first_name}\nlastName: ${ctx.from.last_name}\nusername: ${ctx.from.username}\nlanguage: ${ctx.from.language_code}`;
        yield ctx.reply(info); // msg, from, me
    }));
    bot.hears([/yo /, /Yo /], (ctx) => __awaiter(void 0, void 0, void 0, function* () { return yield ctx.reply(`Yo! What's Up man?`); }));
    bot.catch(e => (0, errorHandler_1.default)(e));
    bot.start();
};
exports.default = trishaBot;
//# sourceMappingURL=trisha.js.map