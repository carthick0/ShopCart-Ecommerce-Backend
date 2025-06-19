class BadRequest extends Error {
    constructor(propertyMissing) {
        const errorMsg = `${propertyMissing} is missing from the request body`
        super(errorMsg);
        this.statusCode = 400;
        this.errorMsg = errorMsg
    }
};

module.exports = BadRequest