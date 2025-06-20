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


// async function getProducts(req, res) {
//     try {
//         const response = await productService.getProducts(req.body);

//         return res
//             .status(StatusCodes.OK)
//             .json({
//                 success: true,
//                 message: 'Successfully displaying products',
//                 data: response
//             })
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function getProduct(req, res) {
//     try {
//         const response = await productService.getProduct(req.params.id);
//         return res
//             .status(StatusCodes.OK)
//             .json({
//                 success: true,
//                 message: 'Successfully fetched product',
//                 data: response
//             })
//     } catch (error) {

//     }
// }
module.exports = {
    createCategory,

}