const jwt = require("jsonwebtoken");
const { JWT_SEC } = require("../config/server_config");

function generateJWT(payload) {
    return jwt.sign(payload, JWT_SEC, { expiresIn: '1h' })
}

module.exports = {
    generateJWT
}