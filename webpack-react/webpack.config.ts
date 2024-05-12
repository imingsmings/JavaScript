import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import AddAssetHtmlWebpackPlugin from 'add-asset-html-webpack-plugin'
import {
    Configuration,
    IgnorePlugin,
    DllReferencePlugin
} from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = MiniCssExtractPlugin.loader

export interface WebpackConfigOptions
    extends Configuration {
    devServer?: DevServerConfiguration
}

const config: WebpackConfigOptions = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction
        ? false
        : 'eval-cheap-module-source-map',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js',
        publicPath: '/',
        clean: {
            keep: 'vendor'
        }
    },
    devServer: {
        open: false,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/'
        }
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.cjs',
            '.mjs'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.s*css$/i,
                use: [
                    stylesHandler,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            minify: {
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true
            }
        }),
        new AddAssetHtmlWebpackPlugin([
            {
                filepath: path.resolve(
                    __dirname,
                    './dist/vendor/react.dll.js'
                ),
                publicPath: '/vendor',
                outputPath: 'vendor'
            },
            {
                filepath: path.resolve(
                    __dirname,
                    './dist/vendor/antd.dll.js'
                ),
                publicPath: '/vendor',
                outputPath: 'vendor'
            }
        ]),
        new MiniCssExtractPlugin({}),
        new IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        }),
        new DllReferencePlugin({
            manifest: path.resolve(
                __dirname,
                './dist/vendor/react-manifest.json'
            ),
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        new DllReferencePlugin({
            manifest: path.resolve(
                __dirname,
                './dist/vendor/antd-manifest.json'
            ),
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        })
    ]
}

export default config
