const jwt = require("jsonwebtoken");
const { JWT_SEC } = require("../config/server_config");

function generateJWT(payload) {
    return jwt.sign(payload, JWT_SEC, { expiresIn: '1h' })
}

function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SEC)
    } catch (error) {
        throw error;
    }

}

module.exports = {
    generateJWT,
    verifyToken
}