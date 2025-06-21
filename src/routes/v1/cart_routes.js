const express = require('express');
const { updateCart } = require('../../controllers/cart_controller');
const { isLoggedIn } = require('../../middlewares/auth_middleware');

const router = express.Router();

router.patch('/:id', isLoggedIn, updateCart);


module.exports = router;