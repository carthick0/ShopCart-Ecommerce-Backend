const express = require('express');
const { pingCheckV2 } = require('../../controllers/ping-controller');

const router = express.Router()

router.get('/ping', pingCheckV2);

module.exports = router