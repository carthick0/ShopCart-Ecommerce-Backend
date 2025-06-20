const express = require('express');
const { createCategory, getCategories, getCategory, deleteCategory } = require('../../controllers/category_controller');

const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);
router.delete('/:id', deleteCategory)

module.exports = router;