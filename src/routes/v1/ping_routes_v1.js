const express = require('express');
const { pingCheck } = require('../../controllers/ping_controller');

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

module.exports = router