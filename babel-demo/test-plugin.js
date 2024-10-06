const babel = require('@babel/core')
const myPlugin = require('./plugins/transform-pow')

const code = 'const result = 2 ** 3'

const result = babel.transform(code, {
    plugins: [myPlugin]
})

console.log(result.code)
