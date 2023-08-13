const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 不打包外部文件
    externals: {
      root: 'Vue',
      vue: 'Vue',
    },
  },
});
