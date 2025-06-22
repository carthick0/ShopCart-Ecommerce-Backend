const Cart = require('./cart');
const CartProducts = require('./cart_products');
const Category = require('./category');
const Order = require('./order');
const OrderProducts = require('./order_products');
const Product = require('./product');
const User = require('./user');


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
    OrderProducts
};