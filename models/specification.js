'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Specification.init({
    productId: DataTypes.INTEGER,
    weight: DataTypes.FLOAT,
    size: DataTypes.FLOAT,
    model: DataTypes.STRING,
    description: DataTypes.TEXT,
    color: DataTypes.STRING,
    follow: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Specification',
  });

  Specification.associate = function(models){
    Specification.belongsTo(models.Product,{
      foreignKey:'specificationId'
    })
  }
  return Specification;
};