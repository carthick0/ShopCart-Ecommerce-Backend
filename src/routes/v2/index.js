const express = require('express');
const pingRouterV2 = require('./ping-routes-v2')
const v2Router = express.Router();

v2Router.use('/ping', pingRouterV2)

module.exports = v2Router;