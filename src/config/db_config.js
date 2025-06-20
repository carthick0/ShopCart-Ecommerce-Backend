const Sequelize = require('sequelize');
const server_config = require('./server_config');


const sequelize = new Sequelize(server_config.DB_NAME, server_config.DB_USER, server_config.DB_PASSWORD, {
    host: server_config.DB_HOST,
    dialect: 'mysql'
})

module.exports = sequelize