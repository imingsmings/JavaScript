const sass = require('sass')
const path = require('path')
const fs = require('fs')

const scssPath = path.resolve('./index.scss')
const cssDir = 'dist'
const cssPath = path.resolve(cssDir, 'index.css')

const result = sass.compile(scssPath)

if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir)
}

fs.writeFileSync(cssPath, result.css)
