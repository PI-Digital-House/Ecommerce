'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    order: DataTypes.STRING,
    customerId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    statusShippId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });

  Order.associate = function(models){
    Order.hasMany(models.Customer)
  }

  Order.associate = function(models){
    Order.hasMany(models.Payment)
  }

  Order.associate = function(models){
    Order.hasMany(models.Product)
  }

  Order.associate = function(models){
    Order.hasMany(models.OrderStatus)
  }

  Order.associate = function(models){
    Order.hasMany(models.ShippmentStatus)
  }
  return Order;
};