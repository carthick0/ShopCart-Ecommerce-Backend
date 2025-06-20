const express = require('express');
const { createCategory, getCategories, getCategory, deleteCategory, getProductsForCategory } = require('../../controllers/category_controller');
const { createCategoryValidator } = require('../../middlewares/category_middleware')
const router = express.Router();

router.post('/', createCategoryValidator, createCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);
router.delete('/:id', deleteCategory);
router.get('/:id/products', getProductsForCategory)

module.exports = router;