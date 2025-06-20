const express = require('express');
const { createUser, getAllUsers, getUser, deleteUser, signInUser } = require('../../controllers/user_controller');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', signInUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);


module.exports = router;