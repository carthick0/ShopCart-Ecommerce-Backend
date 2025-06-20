const { where } = require('sequelize');
const Category = require('../models/category')
class CategoryRepository {
    async getCategories() {
        try {
            const response = await Category.findAll()
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async getCategory(id) {
        try {
            const response = await Category.findByPk(id);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async createCategory(name, description) {
        try {
            const response = await Category.create(name, description)
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


module.exports = CategoryRepository;