async function resolvePlugins(context, plugins) {
  plugins.forEach((plugin) => plugin(context));
}

module.exports = {
  resolvePlugins,
};
