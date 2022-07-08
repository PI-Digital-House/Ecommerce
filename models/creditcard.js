'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creditCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  creditCard.init({
    numberCard: DataTypes.INTEGER,
    expDate: DataTypes.STRING,
    cvv: DataTypes.INTEGER,
    nameCard: DataTypes.STRING,
    cpf: DataTypes.STRING,
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'creditCard',
  });
  return creditCard;
};