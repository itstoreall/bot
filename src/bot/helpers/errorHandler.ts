import { BotError, Context, GrammyError, HttpError } from 'grammy';
import w from '../../winston';

const errorHandler = (e: BotError<Context>) => {
  const { ctx } = e;
  w.err(`Error in Bot: ${ctx.update.update_id}`);
  const { error } = e;

  switch (true) {
    case error instanceof GrammyError:
      w.err(`ERROR in request: ${error.description}`);
      break;
    case error instanceof HttpError:
      w.err(`ERROR of Telegram: ${error}`);
      break;
    default:
      w.err(`ERROR (unknown): ${error}`);
      break;
  }
};

export default errorHandler;
