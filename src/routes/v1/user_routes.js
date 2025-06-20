const express = require('express');
const { createUser, getAllUsers, getUser, deleteUser } = require('../../controllers/user_controller');

const router = express.Router();

router.post('/signup', createUser);
router.get('/login', getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);


module.exports = router;