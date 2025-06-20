const { StatusCodes } = require('http-status-codes');
const CategoryService = require('../services/category_service');
const CategoryRepository = require('../repositories/category_repository');

const productService = new CategoryService(new CategoryRepository())

async function createCategory(req, res) {

    try {
        const response = await productService.createCategory(req.body)
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: 'Successfully created Category',
                data: response
            })
    } catch (error) {
        console.log(error);
    }
}


async function getCategories(req, res) {
    try {
        const response = await productService.getCategories(req.body);

        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully displaying categories',
                data: response
            })
    } catch (error) {
        console.log(error)
    }
}

async function getCategory(req, res) {
    try {
        const response = await productService.getCategory(req.params.id);
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully fetched category',
                data: response
            })
    } catch (error) {

    }
}
module.exports = {
    createCategory,
    getCategories,
    getCategory


}