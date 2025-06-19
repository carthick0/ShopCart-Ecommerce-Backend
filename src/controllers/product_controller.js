function createProduct(req, res) {

    try {


        return res.json({
            success: true,
            message: 'Successfully created product',
            data: {
                id: Math.random(),
                title: '',
                description: '',
                category: '',
                price: 0,
                image: ''
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createProduct
}