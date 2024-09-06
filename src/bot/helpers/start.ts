import { botCtx } from '../types';

const start = async (ctx: botCtx) => {
  await ctx.reply(`Hi! How can I assist you today?`);
};

export default start;
