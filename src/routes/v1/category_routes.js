const express = require('express');
const { createCategory, getCategories, getCategory } = require('../../controllers/category_controller');

const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);


module.exports = router;