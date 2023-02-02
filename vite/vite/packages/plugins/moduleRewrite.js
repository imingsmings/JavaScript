const { readBodyStream, rewriteImports } = require('../../shared/utils.js');

async function moduleRewrite({ app, appPath }) {
  app.use(async (ctx, next) => {
    // other thing

    await next();

    if (ctx.body && ctx.response.is('js')) {
      const result = await readBodyStream(ctx.body);
      const resBody = await rewriteImports(result);

      ctx.type = 'js';
      ctx.body = resBody;
    }
  });
}

module.exports = moduleRewrite;
