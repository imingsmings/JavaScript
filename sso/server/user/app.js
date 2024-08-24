const express = require('express');
const bodyParser = require('body-parser');
const cors = require('../common/middleware/cors');
const { ALLOWED_ORIGINS } = require('../common/config');
const router = require('./middleware/router');

const app = express();
app.use(bodyParser.json());
app.use(cors(ALLOWED_ORIGINS));
app.use(router(app));

app.listen(8800, () => {
    console.log('User server is runring on PORT 8800');
})