const express = require('express');
const { pingCheck, pingAuthCheck } = require('../../controllers/ping_controller');
const { isLoggedIn } = require('../../middlewares/auth_middleware');

const router = express.Router()


// function authCheck(req, res, next) {
//     console.log('Hello from auth');

//     next()
// }

// function logCheck(req, res, next) {
//     console.log('Hello from log');

//     next()
// }


router.get('/', pingCheck);
router.get('/authping', isLoggedIn, pingAuthCheck)

module.exports = router