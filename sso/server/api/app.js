const express = require('express');
const bodyParser = require('body-parser');
const { ALLOWED_ORIGINS } = require('../common/config');
const cors = require('../common/middleware/cors');
const router = require('./middleware/router');

const app = express();
app.use(bodyParser.json());
app.use(cors(ALLOWED_ORIGINS));
app.use(router(app));


app.listen(8100, () => {
    console.log('API server is runring on PORT 8100');
})