const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { verifyToken } = require("../utlis/auth");

const isLoggedIn = function(req, res, next) {
    if (!req.cookies || !req.cookies.token) {
        return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
    }

    const { token } = req.cookies;

    try {
        const decodedToken = verifyToken(token);


        console.log("Decoded Token:", decodedToken);

        // Store the entire decoded token for later use
        req.user = decodedToken;

        next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
    }
};

module.exports = {
    isLoggedIn
};