const express = require('express');
const router = express.Router();
const auth = require('../controller/authenticate')();
const generateRoutes = require('./generateDoc');

router.get('/', (req, res) =>
    res.json({ result: 'working fine !' })
);
router.post('/auth', auth.authenticate);
router.use('/doc', generateRoutes);

module.exports = router;