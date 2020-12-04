const express = require('express');
const router = express.Router();
const generate = require('../controller/generateDoc')();
const authMiddleware = require('../middlewares/authenticate');

router.use(authMiddleware);

router.post('/create', generate.create);


module.exports = router;