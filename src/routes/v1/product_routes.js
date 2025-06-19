const express = require('express');
const { createProduct, getProduct, getProducts } = require('../../controllers/product_controller');
const { createProductValidator } = require('../../middlewares/product_middleware');

const router = express.Router();


router.post('/', createProductValidator, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);


module.exports = router;