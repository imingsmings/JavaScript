const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleCommonLoader = [
  {
    loader: MiniCssExtractPlugin.loader,
  },
  {
    loader: 'css-loader',
    options: {
      sourceMap: false,
      modules: {
        localIdentName: '[local]',
      },
      esModule: true,
    },
  },
  {
    loader: 'postcss-loader',
  },
];

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: '[name]-[hash:8].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: StyleCommonLoader,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          ...StyleCommonLoader,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          ...StyleCommonLoader,
          {
            loader: 'less-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // hash: true,
      minify: process.env.NODE_ENV === 'production',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
    }),
  ],
};
