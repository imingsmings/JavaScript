async function createContext(app) {
  return {
    app,
    //  执行该命令的具体路径
    appPath: process.cwd(),
  };
}

module.exports = {
  createContext,
};
