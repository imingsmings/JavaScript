const path = require('path')
const { DllPlugin } = require('webpack')

const config = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom', 'antd']
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

module.exports = config
