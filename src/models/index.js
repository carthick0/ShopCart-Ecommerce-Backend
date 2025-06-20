const Category = require('./category');
const Product = require('./product');


Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = {
    Category,
    Product
};