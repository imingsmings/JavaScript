const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const autoprefixer = require('autoprefixer');

/**
 * sass less —> sass sass-loader
 * postcss postcss-loader -> autoprefixer
 * css-loader -> 模块化解析
 * vue-style-loader
 */

module.exports = {
  mode: 'development',
  entry: './main.js',
  // entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/main.js',
  },
  externals: {
    // vue: 'Vue',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        loader: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: ['> 1%', 'last 2 versions'],
                  }),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.png|jpg|jpeg$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
    modules: [resolve(__dirname, ''), resolve(__dirname, 'node_modules')],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: './public', // 需要运行在服务器的目录
    // open: true, // 是否自动在浏览器中打开
    // port: 9090, // 服务器端口号
  },
};
