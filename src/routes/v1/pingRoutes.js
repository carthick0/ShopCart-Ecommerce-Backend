const express = require('express');
const { pingCheck } = require('../../controllers/pingContoller');

const router = express.Router()

router.get('/', pingCheck);

module.exports = router