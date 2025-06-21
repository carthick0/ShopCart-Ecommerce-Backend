const express = require('express');
const productRouter = require('./product_routes')
const pingRouterV1 = require('./ping_routes_v1')
const categoryRouter = require('./category_routes');
const userRouter = require('./user_routes')
const cartRouter = require('./cart_routes')

const v1Router = express.Router();

v1Router.use('/ping', pingRouterV1);

v1Router.use('/products', productRouter)

v1Router.use('/categories', categoryRouter);

v1Router.use('/user', userRouter)

v1Router.use('/cart', cartRouter)

module.exports = v1Router;