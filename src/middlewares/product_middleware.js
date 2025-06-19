const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utlis/error_response");

function createProductValidator(req, res, next) {
    if (!req.body.title) {
        return res.json(errorResponse("Title is not present in the incoming request", new BadRequest("Titile")))
    }

    if (!req.body.description) {
        return res.json(errorResponse("description is not present in the incoming request", new BadRequest("description")))
    }

    if (!req.body.price) {
        return res.json(errorResponse("price is not present in the incoming request", new BadRequest("price")))
    }

    if (!req.body.category) {
        return res.json(errorResponse("category is not present in the incoming request", new BadRequest("category")))
    }

    if (!req.body.image) {
        return res.json(errorResponse("image is not present in the incoming request", new BadRequest("image")))
    }


    next()
}




module.exports = {
    createProductValidator
}