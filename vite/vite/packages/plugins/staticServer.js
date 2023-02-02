const koaStatic = require('koa-static');
const { resolve } = require('path');

async function staticServer({ app, appPath }) {
  app.use(koaStatic(appPath));
  app.use(koaStatic(resolve(appPath, 'public')));
}

module.exports = staticServer;
