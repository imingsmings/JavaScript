import myExample from './plugins/rollup-plugin-example.js'
import Json from './plugins/rollup-plugin-json.js'

export default {
    input: 'src/index.js',
    output: {
        dir: './dist/esm',
        format: 'esm'
    },
    plugins: [
        Json({
            include: './package.json',
            exclude: 'node_modules'
        })
    ]
}
