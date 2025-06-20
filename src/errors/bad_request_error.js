const { StatusCodes } = require("http-status-codes");

class BadRequest extends Error {
    constructor(field, hasValidation = false, reasons = []) {
        let errorMsg;
        if (hasValidation) {
            errorMsg = `${field} failed validation checks`;
        } else {
            errorMsg = `${field} is missing from the request body`;
        }

        super(errorMsg);
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.errorMsg = errorMsg;
        this.name = "BadRequest";
        this.reasons = reasons; // Additional field for detailed validation errors
    }
}

module.exports = BadRequest;