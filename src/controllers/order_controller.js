const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const errorResponse = require('../utlis/error_response');
const OrderService = require('../services/order_service');
const OrderRepository = require('../repositories/order_repository');
const CartRepository = require('../repositories/cart_repository');

const orderService = new OrderService(new OrderRepository(), new CartRepository())



async function createOrder(req, res) {

    try {

        const response = await orderService.createOrder(req.user.id)
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: 'Successfully created order',
                data: response
            })
    } catch (error) {
        console.log("Order Controller: Something went wrong", error);
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}


module.exports = {
    createOrder,


}