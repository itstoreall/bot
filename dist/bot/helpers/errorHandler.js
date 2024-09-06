"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const winston_1 = __importDefault(require("../../winston"));
const errorHandler = (e) => {
    const { ctx } = e;
    winston_1.default.err(`Error in Bot: ${ctx.update.update_id}`);
    const { error } = e;
    switch (true) {
        case error instanceof grammy_1.GrammyError:
            winston_1.default.err(`ERROR in request: ${error.description}`);
            break;
        case error instanceof grammy_1.HttpError:
            winston_1.default.err(`ERROR of Telegram: ${error}`);
            break;
        default:
            winston_1.default.err(`ERROR (unknown): ${error}`);
            break;
    }
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map