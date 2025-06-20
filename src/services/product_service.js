const products = [];


class ProductService {
    constructor(repository) {
        this.repository = repository
    }

    async createProduct(product) {
        const response = await this.repository.createProduct(product);
        return response;
    }


    async getProducts(query) {
        try {
            const limit = +query.limit;
            const offset = +query.offset;
            const min_price = +query.min_price;
            const max_price = +query.max_price;
            const search = query.search
            const response = await this.repository.getProducts(limit, offset, min_price, max_price, search);
            return response;
        } catch (error) {
            console.log("ProductService getProducts error:", error);
        }
    }


    async getProduct(id) {
        const response = await this.repository.getProduct(id);
        return response;
    }
    async deleteProduct(id) {
        const response = await this.repository.deleteProduct(id);
    }


}


module.exports = ProductService