const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');

const productionConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',

  plugins: [
    // minimize css
    new OptimizeCssAssetsWebpackPlugin(),
  ],
};

module.exports = merge(baseConfig, productionConfig);
