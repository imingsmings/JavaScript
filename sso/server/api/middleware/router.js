const { ACCESS_SECRET_KEY } = require("../../common/config");
const { verifyToken } = require("../../common/middleware/jwt");
const { getCustomer } = require("../handler/customer");

module.exports = function router (app) {
    return function (req, res, next) {
        app.post('/api/customer', verifyToken(ACCESS_SECRET_KEY), getCustomer);
        next();
    }
}