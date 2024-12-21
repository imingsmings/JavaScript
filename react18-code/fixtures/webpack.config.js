import { resolve } from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

/**
 * @type {import('webpack').Configuration}
 */
export default {
    mode: 'development',
    entry: './fixtures/index.tsx',
    output: {
        filename: 'main.js',
        path: resolve(process.cwd(), './dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                                jsx: true
                            },
                            transform: {
                                react: {
                                    runtime: 'automatic'
                                }
                            }
                        }
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './fixtures/index.html'
        })
    ],
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        open: false
    }
}
