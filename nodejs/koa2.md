##koa2 相关中间件
1. koa-views
```
const views = require('koa-views');
const path = require('path');

// setup views mapping .html
// to the swig template engine

module.exports = views(path.join(__dirname, '/../views'), {
  map: { html: 'swig' }
});
```


2. koa-logger
3. koa-router
4. koa-body
```
const render = require('./lib/render');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');
const app = module.exports = new Koa();

// "database"

const posts = [];

// middleware

app.use(logger());

app.use(render);

app.use(koaBody());
```
5. koa-compose // 组合多个中间件

```
const compose = require('koa-compose');
const all = compose([
  logger(),
  render,
  koaBody()
]);

app.use(all);
```

6. koa-session
