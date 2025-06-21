const InternalServerError = require("../errors/bad_request_error");
const NotFoundError = require("../errors/not_found_error");

class CartService {
    constructor(repository) {
        this.repository = repository;
    }

    async updateCart(userId, cartId, productId, shouldAddProduct = true) {
        try {

            const cart = await this.repository.getCart(userId);
            if (!cart) {
                throw new NotFoundError('Cart', 'id', cartId)
            }
            if (cart.userId !== userId) {
                throw new Error();
            }
            const response = await this.repository.updateCart(cartId, productId, shouldAddProduct)
            return response;
        } catch (error) {
            if (error.name === "NotFoundError") {
                throw error;
            }
            console.log("Cart Service", error);
            throw new InternalServerError();
        }
    }


}


module.exports = CartService;