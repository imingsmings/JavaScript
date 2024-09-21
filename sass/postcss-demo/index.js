const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
// const autoprefixer = require('autoprefixer')

const MyPlugin = require('./plugins/my-plugin')

const style = fs.readFileSync(
    path.resolve(__dirname, './index.css')
)

postcss([
    // autoprefixer({
    //     overrideBrowserslist: 'last 10 versions'
    // })
    MyPlugin
])
    .process(style, { from: undefined })
    .then((res) => {
        console.log(res.css)
    })
