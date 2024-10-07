const swc = require('@swc/core')
const fs = require('fs')
const path = require('path')

const codePath = path.resolve('src', 'index.js')
const sourceCode = fs.readFileSync(codePath, 'utf8')
const outDir = path.resolve(__dirname, 'dist')

swc.transform(sourceCode, {
    jsc: {
        target: 'es5',
        parser: {
            syntax: 'ecmascript'
        }
    }
})
    .then((res) => {
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir)
        }
        const outputFilePath = path.join(outDir, 'index.js')
        fs.writeFileSync(outputFilePath, res.code)
    })
    .catch((err) => {
        console.error(err)
    })
