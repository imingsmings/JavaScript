import { Configuration as BaseConfiguration } from 'webpack'
import { Configuration as DevConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'node:path'
import url from 'node:url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: BaseConfiguration & DevConfiguration = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'user.js',
    publicPath: '/',
    clean: true,
    // libraryTarget: 'system',
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: false,
    port: 4001,
    static: {
      directory: path.join(__dirname, 'dist')
    },
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:4000'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']
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
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './src/index.html')
    // })
  ]
}

export default config
