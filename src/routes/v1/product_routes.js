const express = require('express');
const { createProduct, getProduct, getProducts, deleteProduct } = require('../../controllers/product_controller');
const { createProductValidator } = require('../../middlewares/product_middleware');

const router = express.Router();


router.post('/', createProductValidator, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct)


module.exports = router;