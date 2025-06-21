const { where, Op } = require('sequelize');
const { Cart, CartProducts } = require('../models/index');
const NotFoundError = require('../errors/not_found_error');
class CartRepository {
    async getCarts() {
        try {
            const response = await Cart.findAll()
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async getCart(id) {
        try {
            const response = await Cart.findByPk(id);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async createCart(userId) {
        try {
            const response = await Cart.create({
                userId
            })
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async deleteCategory(catId) {
        try {
            const res = await Category.destroy({
                where: {
                    id: catId
                }
            })
        } catch (error) {

        }
    }
    async updateCart(cartId, productId, shouldAddProduct = true) {
        try {
            const result = await CartProducts.findOne({
                where: {
                    [Op.and]: [
                        { cartId: cartId },
                        { productId: productId }
                    ]
                }
            });

            if (shouldAddProduct) {
                // Add product to cart
                if (!result) {
                    await CartProducts.create({
                        cartId,
                        productId,
                        quantity: 1
                    });
                } else {
                    await result.increment({ quantity: 1 });
                }
            } else {
                // Remove product from cart
                if (!result) {
                    throw new NotFoundError("Cart Product", "Quantity", productId);
                }

                if (result.quantity <= 1) {
                    await CartProducts.destroy({
                        where: {
                            cartId: cartId,
                            productId: productId
                        }
                    });
                } else {
                    await result.decrement({ quantity: 1 });
                }
            }

            const response = await CartProducts.findAll({
                where: {
                    cartId: cartId
                }
            });

            return {
                cartId: cartId,
                products: response
            };
        } catch (error) {
            console.error('Error in updateCart:', error);
            throw error;
        }
    }

}


module.exports = CartRepository;