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
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const info = `id: ${ctx.from.id}\nfirstName: ${ctx.from.first_name}\nlastName: ${ctx.from.last_name}\nusername: ${ctx.from.username}\nlanguage: ${ctx.from.language_code}`;
    yield ctx.reply(info); // msg, from, me
});
exports.default = userInfo;
//# sourceMappingURL=userInfo.js.map