const Sequelize = require('sequelize');
const db = require('../config/db_config');


const OrderProducts = db.define('order_products', {
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Carts',
            key: 'id'
        }
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

module.exports = OrderProducts;