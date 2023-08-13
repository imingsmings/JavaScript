// const env = process.env.MODE;
// console.log(env);

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'index.js',
    output: {
        file: 'dist/index.js',
        format: 'es',
        // format: 'umd',
        // name: 'Max',
        plugins: [terser()]
    },
    plugins: [resolve(), commonjs()]
}