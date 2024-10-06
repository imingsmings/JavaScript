module.exports = function (babel) {
    const { types: t } = babel

    return {
        name: 'transform-to-mathpow',
        visitor: {
            BinaryExpression(path) {
                if (path.node.operator !== '**') {
                    return
                }

                const mathpowAstNode = t.callExpression(
                    t.memberExpression(
                        t.identifier('Math'),
                        t.identifier('pow')
                    ),
                    [path.node.left, path.node.right]
                )

                path.replaceWith(mathpowAstNode)
            }
        }
    }
}
