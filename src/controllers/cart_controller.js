const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const errorResponse = require('../utlis/error_response');
const CartService = require('../services/cart_service');
const CartRepository = require('../repositories/cart_repository');

const cartService = new CartService(new CartRepository())




async function updateCart(req, res) {

    try {
        const shouldAddProduct = (req.body.shouldAddProduct === true || req.body.shouldAddProduct === "true") ? true : false
        const response = await cartService.updateCart(req.user.id, req.params.id, req.body.productId, shouldAddProduct)
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully updated Cart',
                data: response
            })
    } catch (error) {
        console.log("Cart Controller: Something went wrong", error);
        return res.status(error.statusCode).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}

module.exports = {
    updateCart,

}