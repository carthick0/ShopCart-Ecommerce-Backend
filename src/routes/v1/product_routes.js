const express = require('express');
const { createProduct } = require('../../controllers/product_controller');
const { createProductValidator } = require('../../middlewares/product_middleware');

const router = express.Router();


router.post('/', createProductValidator, createProduct);

module.exports = router;