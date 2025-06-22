const Sequelize = require('sequelize');
const db = require('../config/db_config');

const Cart = db.define('cart', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

module.exports = Cart;