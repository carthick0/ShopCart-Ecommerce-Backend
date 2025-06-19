const { StatusCodes } = require('http-status-codes');
const ProductService = require('../services/product_service');
const FakeStoreRepository = require('../repositories/fake_store_repository');


const productService = new ProductService(new FakeStoreRepository())

function createProduct(req, res) {

    try {
        const response = productService.createProduct(req.body)
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
        const response = await productService.getProducts(req.body);

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

function getProduct(req, res) {
    try {
        const response = productService.getProduct(req.params.id);
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully fetched product',
                data: response
            })
    } catch (error) {

    }
}
module.exports = {
    createProduct,
    getProduct,
    getProducts
}