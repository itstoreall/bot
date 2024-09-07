import { Bot } from 'grammy';
import dotenv from 'dotenv';
import w from '../winston';
import * as api from '../api/spotActions';
import errorHandler from './helpers/errorHandler';
import userInfo from './helpers/userInfo';
import start from './helpers/start';
dotenv.config();

const uniBotApiKey: string = process.env.UNI_BOT_API_KEY;

const uniBot = () => {
  w.fn('uniBot');

  const bot = new Bot(uniBotApiKey);

  // ------ Hears:

  bot.hears(
    [/Yo/, /yo/, /yo /, /Yo /],
    async ctx => await ctx.reply(`Yo! What's Up man?`)
  );

  bot.api.setMyCommands([
    { command: 'start', description: 'Start Bot' },
    { command: 'info', description: 'User Info' },
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

  bot.command('start', async ctx => start(ctx));

  bot.command('info', async ctx => userInfo(ctx));

  bot.command('get_all', async ctx => api.getActions(ctx));

  bot.command('get_by_id', async ctx => api.getActionByID(ctx));

  bot.command('get_by_sym', async ctx => api.getActionBySymbol(ctx));

  /*
  bot.on('msg').filter(
    ctx => `${ctx.from.id}` === process.env.TELEGRAM_ADMIN_ID,
    async ctx => ctx.reply('Hi Admin!')
    );
    
    bot.on('msg', async ctx => {
      await ctx.reply(`bla bla bla`);
      });
      */

  bot.catch(e => errorHandler(e));
  bot.start();
};

export default uniBot;
