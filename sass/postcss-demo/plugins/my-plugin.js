const Color = require('color')

module.exports = function (opt = {}) {
    return {
        postcssPlugin: 'convertColorsToHex',
        Declaration(decl) {
            const colorRegex =
                /(^color)|(^background(-color)?)/
            if (colorRegex.test(decl.prop)) {
                try {
                    const color = Color(decl.value)
                    const hex = color.hex()
                    decl.value = hex
                } catch (err) {
                    console.error(
                        `[convertColorsToHex] Error processing ${decl.prop}: ${err.message}`
                    )
                }
            }
        }
    }
}
module.exports.postcss = true
