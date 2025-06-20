const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class ConflictError extends Error {
    constructor(resource, conflicts) {
        const errorMsg = `Request cannot be completed because it contains conflicting data with the ${resource} resource`;
        super(errorMsg);
        this.statusCode = StatusCodes.CONFLICT;
        this.errorMsg = errorMsg;
        this.reason = ReasonPhrases.CONFLICT;
        this.name = "ConflictError";
        this.conflicts = conflicts;
    }
};

module.exports = ConflictError;