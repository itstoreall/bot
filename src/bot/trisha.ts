import axios from 'axios';
import { Bot, Keyboard } from 'grammy';
import errorHandler from './errorHandler';
import dotenv from 'dotenv';
import w from '../winston';

dotenv.config();

const trishaBotApiKey: string = process.env.TRISHA_BOT_API_KEY;
const openWeatherApiKey: string = process.env.OPEN_WEATHER_API_KEY;
const city: string = 'Kyiv';
const url: string = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`;

interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const trishaBot = () => {
  w.fn('trisha bot', false);

  const bot = new Bot(trishaBotApiKey);

  bot.api.setMyCommands([
    { command: 'menu', description: 'Menu' },
    { command: 'info', description: 'Info' }
  ]);

  bot.command('menu', async ctx => {
    const menuKeyboard = new Keyboard().text('Weather').row().resized();
    await ctx.reply(`The menu is open`, { reply_markup: menuKeyboard });
  });

  bot.hears('Weather', async ctx => {
    try {
      const { data } = await axios.get<WeatherResponse>(url);
      const weather = `${city}: ${data.main.temp.toFixed()}°C with ${
        data.weather[0].description
      }.`;
      await ctx.reply(weather, { reply_markup: { remove_keyboard: true } });
    } catch (e) {
      const err = `ERROR in axios: ${e}`;
      await ctx.reply(err, { reply_markup: { remove_keyboard: true } });
    }
  });

  bot.command('info', async ctx => {
    const info = `id: ${ctx.from.id}\nfirstName: ${ctx.from.first_name}\nlastName: ${ctx.from.last_name}\nusername: ${ctx.from.username}\nlanguage: ${ctx.from.language_code}`;
    await ctx.reply(info); // msg, from, me
  });

  bot.hears([/yo /, /Yo /], async ctx => await ctx.reply(`Yo! What's Up man?`));

  bot.catch(e => errorHandler(e));
  bot.start();
};

export default trishaBot;
