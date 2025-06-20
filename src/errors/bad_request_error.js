const { StatusCodes } = require("http-status-codes");

class BadRequest extends Error {
    constructor(propertyMissing) {
        const errorMsg = `${propertyMissing} is missing from the request body`
        super(errorMsg);
        this.statusCode = StatusCodes.BAD_GATEWAY;
        this.errorMsg = errorMsg;
        this.name = "BadRequest"
    }
};

module.exports = BadRequest