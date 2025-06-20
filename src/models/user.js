const Sequelize = require('sequelize');
const db = require('../config/db_config');

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Email must be a valid email address'
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [3, 30],
                msg: 'Password must be between 3 and 30 characters'
            },
            isAlphanumeric: {
                msg: 'Password must contain only letters and numbers'
            }
        }
    }
});

module.exports = User;