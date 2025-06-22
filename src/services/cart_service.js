const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");
const UnauthorizedError = require("../errors/unauthorized_error");


class CartService {
    constructor(repository) {
        this.repository = repository;
    }

    async updateCart(userId, cartId, productId, shouldAddProduct = true) {
        try {
            // const cart = await this.repository.getCart(userId);
            // if (cart.userId !== userId) {
            //     throw new Error();
            // }
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

    async getCartProducts(cartId, userId) {
        try {
            const cart = await this.repository.getCart(cartId);
            if (!cart) {
                throw new NotFoundError('Cart', 'id', cartId);
            }
            if (cart.userId !== userId) {
                throw new UnauthorizedError('You are not authorised to do the current operation');
            }
            const response = await this.repository.getCartProducts(cartId);
            return response;
        } catch (error) {
            if (error.name === "NotFoundError" || error.name === "UnauthorizedError") {
                throw error;
            }
            console.log("CartService: ", error);
            throw new InternalServerError();
        }
    }

    async clearCart(cartId, userId) {
        try {
            const cart = await this.repository.getCart(cartId);
            if (!cart) {
                throw new NotFoundError('Cart', 'id', cartId);
            }
            if (cart.userId !== userId) {
                throw new UnauthorizedError('You are not authorised to do the current operation');
            }
            const response = await this.repository.clearCart(cartId);
            return response;
        } catch (error) {
            if (error.name === "NotFoundError" || error.name === "UnauthorizedError") {
                throw error;
            }
            console.log("CartService: ", error);
            throw new InternalServerError();
        }
    }


}


module.exports = CartService;