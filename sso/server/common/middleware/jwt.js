const jwt = require('jsonwebtoken')

function verifyToken(secretKey) {
    return function (req, res, next) {
        const token =
            req.headers.authorization.split(' ')[1]
        console.log(token)

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.json({
                    code: 2,
                    msg: 'Invalid token'
                })
            }
            req.tokenInfo = decoded
            next()
        })
    }
}

module.exports = {
    verifyToken
}
