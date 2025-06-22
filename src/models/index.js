const { NODE_ENV } = require('../config/server_config');
const Cart = require('./cart');
const CartProducts = require('./cart_products');
const Category = require('./category');
const Order = require('./order');
const OrderProducts = require('./order_products');
const Product = require('./product');
const User = require('./user');


async function syncDbInOrder() {
    await Category.sync();
    await Product.sync();
    await User.sync();
    await Cart.sync();
    await Order.sync();
    await CartProducts.sync()
    await OrderProducts.sync()
}



Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });


User.hasOne(Cart);
Cart.belongsTo(User, { foreignKey: 'userId' })


//many to many mapping btw cart and products;
//cart has many products through cart products
//product belongs to many cart through cart products;

Cart.belongsToMany(Product, { through: CartProducts })
Product.belongsToMany(Cart, { through: CartProducts })



Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });


Order.belongsToMany(Product, { through: OrderProducts })
Product.belongsToMany(Order, { through: OrderProducts })

module.exports = {
    Category,
    Product,
    User,
    Cart,
    CartProducts,
    Order,
    OrderProducts,
    syncDbInOrder
};