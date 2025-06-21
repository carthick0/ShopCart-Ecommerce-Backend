const Cart = require('./cart');
const CartProducts = require('./cart_products');
const Category = require('./category');
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

module.exports = {
    Category,
    Product,
    User,
    Cart,
    CartProducts
};