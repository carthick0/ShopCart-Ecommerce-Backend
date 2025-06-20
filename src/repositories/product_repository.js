const { where } = require('sequelize');
const { Product } = require('../models/index');
const { Op } = require('sequelize');
const { response } = require('express');
class ProductRepository {
    async getProducts(limit, offset, min_price, max_price, search) {
        const options = {
            where: {}
        };

        if (!isNaN(limit)) {
            options.limit = limit;
        }

        if (!isNaN(offset)) {
            options.offset = offset;
        }

        if (min_price || max_price) {
            const min = min_price || Number.MIN_SAFE_INTEGER;
            const max = max_price || Number.MAX_SAFE_INTEGER;

            options.where.price = {
                [Op.between]: [min, max]
            };
        }

        if (search) {
            options.where.title = {
                [Op.like]: `%${search}%`
            };
        }

        try {
            return await Product.findAll(options);
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

    async searchProduct(searchQuery) {
        try {
            const response = await Product.findAll({
                where: {
                    title: {
                        [Op.like]: `%${searchQuery}%`
                    }
                }
            });
            return response
        } catch (error) {

        }
    }
}

module.exports = ProductRepository;