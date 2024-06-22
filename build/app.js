'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const app = new koa_1.default();
const router = new router_1.default();
let hello = "Hello everybody!!!";
let dzien = 5;
let miesiac = "Pazdziernika";
let rok = 1991;
router
    .get('/hello', (ctx, next) => {
    //ctx.body = `\n\n ${hello} \n\n Pierwsze wydanie kernela Linuksa miało miejsce ${dzien} ${miesiac} ${rok}  `;
    ctx.body = `Pierwsze wydanie kernela Linuksa miało miejsce`;
})
    .get('/goodbye', (ctx, next) => {
    ctx.body = 'Goodbye, world';
});
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(8080);


//export default hello;