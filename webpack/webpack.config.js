const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

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
];

module.exports = {
  mode: 'development',
  // mode: 'production',
  devtool: devMode ? 'eval-cheap-module-source-map' : 'cheap-module-source-map',

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name]-[hash:8].[ext]',
          //     outputPath: 'images',
          //     publicPath: 'assets',
          //   },
          // },
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
        rules: StyleCommonLoader,
      },
      {
        test: /\.s[ac]ss$/i,
        rules: [
          ...StyleCommonLoader,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                // outputStyle: 'compressed', // minimize scss file
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        rules: [
          ...StyleCommonLoader,
          {
            loader: 'less-loader',
            options: {
              sourceMap: false,
              // less-plugin-clean-css: minimize less file
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // copy html template
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true, // Append a unique hash to all included scripts and CSS files, for cache
      minify: !devMode, // the output should be minified or not.
      // publicPath: 'https://www.imings.cn', // The publicPath used for script and link tags
    }),
    // clean build dir
    new CleanWebpackPlugin(),
    // extract css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
    }),
    // minimize css
    new OptimizeCssAssetsWebpackPlugin(),
  ],
};
