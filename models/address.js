'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.hasOne(models.Customers, {
        foreignKey:'addressId',
        as:'address'
      })
    }
  }
  Address.init({
    address: DataTypes.STRING,
    complementary: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    cep: DataTypes.STRING,
    referencePoint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};