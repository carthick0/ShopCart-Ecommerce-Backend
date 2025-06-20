const Category = require('./category');
const Product = require('./product');
const User = require('./user');


Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = {
    Category,
    Product,
    User
};