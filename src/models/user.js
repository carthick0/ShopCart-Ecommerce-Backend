const Sequelize = require('sequelize');
const db = require('../config/db_config');

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [3, 30],
        idAlphanumeric: true
    }
});

module.exports = User;