import { botCtx } from '../types';

const userInfo = async (ctx: botCtx) => {
  const info = `id: ${ctx.from.id}\nfirstName: ${ctx.from.first_name}\nlastName: ${ctx.from.last_name}\nusername: ${ctx.from.username}\nlanguage: ${ctx.from.language_code}`;
  await ctx.reply(info); // msg, from, me
};

export default userInfo;
