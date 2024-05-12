import path from 'path'
import { DllPlugin } from 'webpack'

import type { WebpackConfigOptions } from './webpack.config'

const config: WebpackConfigOptions = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom'],
        antd: 'antd'
    },
    output: {
        path: path.resolve(__dirname, 'dist/vendor'),
        filename: '[name].dll.js',
        library: '[name]',
        clean: true
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
    plugins: [
        new DllPlugin({
            path: path.resolve(
                __dirname,
                'dist/vendor',
                '[name]-manifest.json'
            ),
            name: '[name]'
        })
    ]
}

export default config
