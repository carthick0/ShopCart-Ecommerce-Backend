const { where } = require('sequelize');
const { Product } = require('../models/index');

class ProductRepository {
    async getProducts(limit, offset) {
        try {
            return await Product.findAll({ limit, offset });
        } catch (error) {
            console.log(error);
        }
    }

    async getProduct(id) {
        try {
            return await Product.findByPk(id);
        } catch (error) {
            console.log(error);
        }
    }

    async createProduct(productData) {
        try {
            return await Product.create(productData);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            return await Product.destroy({ where: { id } });
        } catch (error) {
            console.log(error);
        }
    }

    async getProductsForCategory(categoryId) {
        try {
            const response = await Product.findAll({
                where: {
                    categoryId: categoryId
                }
            });
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ProductRepository;