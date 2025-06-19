const express = require('express');
const { pingCheckV2 } = require('../../controllers/pingContoller');

const router = express.Router()

router.get('/ping', pingCheckV2);

module.exports = router