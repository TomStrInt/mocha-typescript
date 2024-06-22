'use strict';

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router
    .get('/hello', (ctx, next) => {
     ctx.body = 'Hello, world';
     })
    .get('/goodbye', (ctx, next)=> {
    ctx.body = 'Goodbye, world';
    });

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);