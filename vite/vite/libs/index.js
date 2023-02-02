const { createServer, app } = require('./server.js');
const { createContext } = require('./context.js');
const { resolvePlugins } = require('./plugin.js');
const { PORT } = require('./config.js');
const plugins = require('../packages/plugins');

(async () => {
  const server = await createServer();
  const context = await createContext(app);

  resolvePlugins(context, plugins);

  server.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
  });
})();
