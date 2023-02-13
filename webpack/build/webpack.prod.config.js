const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');

const productionConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimize: true,
    minimizer: [
      // css
      new CssMinimizerWebpackPlugin(),
      // js
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|less|s[ac]ss)$/,
          chunks: 'all',
          enforce: true,
          minChunks: 1,
        },
      },
    },
  },
  plugins: [
    // split css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new CssMinimizerWebpackPlugin(),
  ],
};

module.exports = merge(baseConfig, productionConfig);
