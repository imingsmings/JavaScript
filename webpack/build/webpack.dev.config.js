const { HotModuleReplacementPlugin } = require('webpack');
const baseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');

const developmentConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 8000,
    open: true,
    publicPath: '/',
    hot: true,
    proxy: {
      '/api': {
        target: 'https://www.imings.cn/',
        // pathRewrite: {
        //   '^/api': '',
        // },
      },
    },
  },
  plugins: [
    // hmr
    new HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(baseConfig, developmentConfig);
