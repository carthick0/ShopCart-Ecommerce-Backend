const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utlis/error_response");
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

function createProductValidator(req, res, next) {
    if (!req.body.title) {
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Titile")))
    }

    if (!req.body.description) {
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("description")))
    }

    if (!req.body.price) {
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("price")))
    }

    if (!req.body.category) {
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("category")))
    }

    if (!req.body.image) {
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("image")))
    }


    next()
}




module.exports = {
    createProductValidator
}