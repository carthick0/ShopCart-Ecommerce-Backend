const express = require('express');
const { isLoggedIn } = require('../../middlewares/auth_middleware');
const { createOrder } = require('../../controllers/order_controller');
const router = express.Router();

router.post('/', isLoggedIn, createOrder);

module.exports = router;