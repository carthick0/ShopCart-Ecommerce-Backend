const products = [];


class ProductService {
    constructor(repository) {
        this.repository = repository
    }

    async createProduct(product) {
        const response = await this.repository.createProduct(product);
        return response.data;
    }


    async getProducts() {
        const response = await this.repository.getProducts();
        return response.data
    }

    async getProduct(id) {
        const response = await this.repository.getProduct(id);
        return response.data;
    }

}


module.exports = ProductService