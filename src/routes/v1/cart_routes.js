const express = require('express');
const { updateCart, getCartProducts, clearCart } = require('../../controllers/cart_controller');
const { isLoggedIn } = require('../../middlewares/auth_middleware');

const router = express.Router();

router.patch('/:id', isLoggedIn, updateCart);
router.get('/:id/products', isLoggedIn, getCartProducts)
router.delete('/:id/products', isLoggedIn, clearCart)
module.exports = router;