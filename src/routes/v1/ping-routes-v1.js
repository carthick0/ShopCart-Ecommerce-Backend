const express = require('express');
const { pingCheck } = require('../../controllers/ping-controller');

const router = express.Router()

router.get('/', pingCheck);

module.exports = router