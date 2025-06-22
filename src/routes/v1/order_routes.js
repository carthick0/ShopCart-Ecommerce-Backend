const express = require('express');
const { isLoggedIn } = require('../../middlewares/auth_middleware');
const { createOrder, getOrder } = require('../../controllers/order_controller');
const router = express.Router();

router.post('/', isLoggedIn, createOrder);
router.get('/:id', isLoggedIn, getOrder)
module.exports = router;