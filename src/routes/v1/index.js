const express = require('express');

const pingRouterV1 = require('./ping-routes-v1')
const v1Router = express.Router();

v1Router.use('/ping', pingRouterV1)

module.exports = v1Router;