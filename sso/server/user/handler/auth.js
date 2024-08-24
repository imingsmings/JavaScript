const user = require("../database/user");
const { checkCryptoHash } = require("../../common/util/encrypt");
const { createToken } = require("../../common/util/jwt");
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY, ACCESS_TOKEN_OPTIONS, REFRESH_TOKEN_OPTIONS } = require("../../common/config");

exports.loginAction = function (req, res) {
    const {
        username,
        password
    } = req.body;

    const userData = user[username];

    if (!userData) {
        res.json({
            code: 1,
            msg: 'Invalid username'
        });
        return;
    }

    const isRightPassword = checkCryptoHash(password, userData.password);

    if (!isRightPassword) {
        res.json({
            code: 1,
            msg: 'Invalid password'
        });
        return;
    }

    const { accessToken, refreshToken } = createDoubleTokens(userData);

    res.json({
        code: 0,
        msg: 'ok',
        data: {
            access_token: accessToken,
            refresh_token: refreshToken
        }
    });
}

exports.loginRefresh = function (req, res) {
    const { tokenInfo } = req;
    const { userId, username } = tokenInfo;
    const userData = user[username];
    
    if (userData && userData.id === userId) {
        const { accessToken, refreshToken } = createDoubleTokens(userData);
    
        res.json({
            code: 0,
            msg: 'ok',
            data: {
                access_token: accessToken,
                refresh_token: refreshToken
            }
        });
        return;
    }

    res.json({
      code: 1,
      msg: 'User doesn\'t exist'
    });
}

function createDoubleTokens (userData) {
    const accessToken = createToken(ACCESS_SECRET_KEY, {
        userId: userData.id,
        username: userData.username
    }, ACCESS_TOKEN_OPTIONS);

    const refreshToken = createToken(REFRESH_SECRET_KEY, {
        userId: userData.id,
        username: userData.username
    }, REFRESH_TOKEN_OPTIONS);

    return {
        accessToken,
        refreshToken
    }
}