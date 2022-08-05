'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Brand.init({
    brandName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
  });
  Brand.associate = function(models){
    Brand.belongsTo(models.Product,{
      foreignKey:'brandID'
    })
  }
  return Brand;
};