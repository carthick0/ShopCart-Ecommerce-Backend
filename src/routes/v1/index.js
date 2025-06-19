const express = require('express');
const productRouter = require('./product_routes')
const pingRouterV1 = require('./ping_routes_v1')
const v1Router = express.Router();

v1Router.use('/ping', pingRouterV1);

v1Router.use('/products', productRouter)

module.exports = v1Router;