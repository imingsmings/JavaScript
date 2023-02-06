const { Router } = require('express');
const { IndexView, DetailView } = require('../controller');

const router = new Router();

router.get('/', IndexView);
router.get('/detail/:id', DetailView);

module.exports = router;
