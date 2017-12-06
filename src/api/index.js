const express = require('express');

const router = express.Router();

const users = require('./users/commands')
const home = require('./home/commands')

router.use('/users', users)
router.use('/', home)

module.exports = router;