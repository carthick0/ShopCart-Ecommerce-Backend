const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_ALTER: process.env.DB_ALTER,
    DB_FORCE: process.env.DB_FORCE
}