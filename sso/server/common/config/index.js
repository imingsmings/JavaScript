const ACCESS_SECRET_KEY = 'abcd1234abcd';
const REFRESH_SECRET_KEY = '1234abcd1234';
const ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000'
]

const ACCESS_TOKEN_OPTIONS = {
    expiresIn: 60
}

const REFRESH_TOKEN_OPTIONS = {
    expiresIn: 60 * 2
}

module.exports = {
    ACCESS_SECRET_KEY,
    REFRESH_SECRET_KEY,
    ALLOWED_ORIGINS,
    ACCESS_TOKEN_OPTIONS,
    REFRESH_TOKEN_OPTIONS
}
