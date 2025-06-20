const { StatusCodes } = require("http-status-codes");

class InternalServerError extends Error {
    constructor() {
        const errorMsg = 'Something went wrong,please try again later'
        super(errorMsg);
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        this.errorMsg = errorMsg;
        this.name = "InternalServerError"
    }
};

module.exports = InternalServerError