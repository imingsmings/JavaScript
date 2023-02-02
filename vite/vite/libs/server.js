const Koa = require('koa');
const app = new Koa();

async function createServer() {
  return {
    listen(port, callback) {
      app.listen(port, callback);
    },
  };
}

module.exports = {
  createServer,
  app,
};
