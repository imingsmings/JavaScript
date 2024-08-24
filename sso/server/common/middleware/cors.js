module.exports = function Cors (allowedOrigins) {
    return function (req, res, next) {
        const { 
            origin 
        } = req.headers;

        if (!Array.isArray(allowedOrigins)) return;

        if (allowedOrigins.includes(origin)) {
            res.header('Access-Control-Allow-Origin', origin);
            res.header('Access-Control-Allow-Methods', 'GET,POST');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            res. header('Access-Control-Allow-Credentials', 'true');
            next();
        }
    }
}