const express = require('express');

const pingRouterV1 = require('./pingRoutes')
const v1Router = express.Router();

v1Router.use('/ping', pingRouterV1)

module.exports = v1Router;