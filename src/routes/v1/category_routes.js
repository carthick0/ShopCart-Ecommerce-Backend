const express = require('express');
const { createCategory } = require('../../controllers/category_controller');

const router = express.Router();

router.post('/', createCategory)

module.exports = router;