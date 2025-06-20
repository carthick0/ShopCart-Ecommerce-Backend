const { StatusCodes } = require('http-status-codes');
const ProductService = require('../services/product_service');
const ProductRepository = require('../repositories/product_repository');


const productService = new ProductService(new ProductRepository())

async function createProduct(req, res) {

    try {
        const response = await productService.createProduct(req.body)
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: 'Successfully created product',
                data: response
            })
    } catch (error) {
        console.log(error);
    }
}


async function getProducts(req, res) {
    try {
        const response = await productService.getProducts(req.query);

        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully displaying products',
                data: response
            })
    } catch (error) {
        console.log(error)
    }
}

async function getProduct(req, res) {
    try {
        const response = await productService.getProduct(req.params.id);
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully fetched product',
                data: response
            })
    } catch (error) {

    }
};

async function deleteProduct(req, res) {

    try {
        const response = await productService.deleteProduct(req.params.id);
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully deleted product',
                data: response
            })
    } catch (error) {

    }
}
module.exports = {
    createProduct,
    getProduct,
    getProducts,
    deleteProduct
}