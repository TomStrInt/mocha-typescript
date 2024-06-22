'use strict';

import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

let hello: string = "Hello everybody!!!";
let dzien: number = 5;
let miesiac: string = "Pazdziernika";
let rok: number = 1991;

router
    .get('/hello', (ctx, next) => {
     ctx.body = `\n\n ${hello} \n\n Pierwsze wydanie kernela Linuksa miało miejsce ${dzien} ${miesiac} ${rok}  `;
     })
    .get('/goodbye', (ctx, next)=> {
    ctx.body = 'Goodbye, world';
    });

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);