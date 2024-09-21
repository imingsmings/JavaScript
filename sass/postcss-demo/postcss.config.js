// module.exports = {
//     plugins: [
//         require('stylelint')({
//             fix: true
//         }),
//         require('autoprefixer')({
//             // overrideBrowserslist: 'last 10 versions'
//         }),
//         require('cssnano')
//     ]
// }

const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        require('postcss-preset-env')({
            stage: 2,
            autoprefixer: {
                grid: true
            },
            browsers: 'last 10 versions'
        })
    ]
}
