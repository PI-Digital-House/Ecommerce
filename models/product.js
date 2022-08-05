'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    brandID: DataTypes.INTEGER,
    specificationId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.associate = function(models){
    Product.hasMany(models.Category)
  }

  Product.associate = function(models){
    Product.hasMany(models.Specification)
  }
  Product.associate = function(models){
    Product.hasMany(models.Brand)
  }

  Product.associate = function(models){
    Product.belongsTo (models.Order,{
      foreignKey:'productId'
    })
  }




  return Product;
};