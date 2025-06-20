class CategoryService {
    constructor(repository) {
        this.repository = repository
    }

    async createCategory(product) {
        const response = await this.repository.createCategory(product);
        return response;
    }


    async getCategories() {
        const response = await this.repository.getCategories()
        return response;
    }

    async getCategory(id) {
        const response = await this.repository.getCategory(id)
        return response
    }

}


module.exports = CategoryService;