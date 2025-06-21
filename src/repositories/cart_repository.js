const { Cart } = require('../models/index')
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
}


module.exports = CartRepository;