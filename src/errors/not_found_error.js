const { StatusCodes } = require("http-status-codes");

class NotFoundError extends Error {
    constructor(resourceName, property, propertyValue) {
        const errorMsg = `The resource ${resourceName} whith ${property} :${propertyValue} not found`
        super(errorMsg);
        this.statusCode = StatusCodes.NOT_FOUND;
        this.errorMsg = errorMsg;
        this.name = "NotFoundError"
    }
};

module.exports = NotFoundError