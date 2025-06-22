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
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}

async function getCartProducts(req, res) {
    try {
        const response = await cartService.getCartProducts(req.params.id, req.user.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched Cart Products',
            data: response
        });
    } catch (error) {
        console.log("Cart Controller: Something went wrong", error);
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(errorResponse(error.message || ReasonPhrases.INTERNAL_SERVER_ERROR, error));
    }
}

async function clearCart(req, res) {
    try {
        const response = await cartService.clearCart(req.params.id, req.user.id);

        return res
            .status(StatusCodes.OK)
            .json({
                sucess: true,
                error: {},
                message: "deleted Cart successfully",
                data: response
            });

    } catch (error) {
        console.log("CartController: Something went wrong", error);
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)

        .json(errorResponse(error.reason, error));
    }
}
module.exports = {
    updateCart,
    getCartProducts,
    clearCart

}