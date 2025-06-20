const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utlis/error_response");
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

function createCategoryValidator(req, res, next) {
    if (!req.body.name) {
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Name")))
    }

    if (!req.body.description) {
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("description")))
    }


    next()
}

module.exports = {
    createCategoryValidator
}