const InternalServerError = require("../errors/bad_request_error");
const NotFoundError = require("../errors/not_found_error");

class CategoryService {
    constructor(repository, productRepository) {
        this.repository = repository;
        this.productRepository = productRepository
    }

    async getProductsForCategory(categoryId) {
        try {
            await this.getCategory(categoryId);
            const response = await this.productRepository.getProductsForCategory(categoryId);
            return response;
        } catch (error) {
            if (error.name === "NotFoundError") {
                throw error;
            }
            console.log("Category Service", error);
            throw new InternalServerError();
        }
    }
    async createCategory(product) {
        try {
            const response = await this.repository.createCategory(product);
            return response;
        } catch (error) {
            console.log("Category Service", error);
            throw new InternalServerError();
        }

    }

    async getCategories() {

        try {
            const response = await this.repository.getCategories()
            return response;
        } catch (error) {
            console.log("Category Service", error);
            throw new InternalServerError();
        }

    }

    async getCategory(id) {
        try {
            const response = await this.repository.getCategory(id);
            if (!response) {
                throw new NotFoundError("Category", "id", id)
            }
            return response;

        } catch (error) {
            if (error.name === "NotFoundError") {
                throw error;
            }
            console.log("Category Service", error);
            throw new InternalServerError();
        }

    }
    async deleteCategory(id) {

        try {
            const response = await this.repository.deleteCategory(id);
            return response;
        } catch (error) {
            console.log("Category Service", error);
            throw new InternalServerError();
        }

    }

}


module.exports = CategoryService;