const path = require('path')
const os = require('os')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const {
    IgnorePlugin,
    DllReferencePlugin
} = require('webpack')
const WebpackMkcert = require('webpack-mkcert')

const isProduction = process.env.NODE_ENV === 'production'
const stylesHandler = MiniCssExtractPlugin.loader

const config = {
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
            template: './src/index.html',
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
            )
        })
    ]
}

module.exports = async function () {
    const https = await WebpackMkcert.default({
        source: 'coding',
        hosts: ['localhost', '127.0.0.1', getLocalIP()]
    })

    config.devServer = {
        open: false,
        host: '0.0.0.0',
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/'
        },
        server: {
            type: 'https',
            options: {
                host: 'localhost',
                ...https
            }
        }
    }

    return config
}

function getLocalIP() {
    const networkInterfaces = os.networkInterfaces()
    for (const interfaceName in networkInterfaces) {
        const addresses = networkInterfaces[interfaceName]
        for (const address of addresses) {
            if (
                address.family === 'IPv4' &&
                !address.internal
            ) {
                return address.address
            }
        }
    }
    return '127.0.0.1'
}
