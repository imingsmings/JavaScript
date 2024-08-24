const { REFRESH_SECRET_KEY } = require('../../common/config');
const { verifyToken } = require('../../common/middleware/jwt');
const {
    loginAction,
    loginRefresh
} = require('../handler/auth');

module.exports = function router (app) {
    
    return function (req, res, next) {
        app.post('/auth/login', loginAction);
        app.post('/auth/refresh', verifyToken(REFRESH_SECRET_KEY), loginRefresh);

        next();
    }
}