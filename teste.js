const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('helpi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  class Product extends Model {}
  Product.init({
    title: Sequelize.STRING
  }, { sequelize, modelName: 'product' });
  class User extends Model {}
  User.init({
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  }, { sequelize, modelName: 'user' });
  class Address extends Model {}
  Address.init({
    type: DataTypes.STRING,
    line1: Sequelize.STRING,
    line2: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
  }, { sequelize, modelName: 'address' });
  class Tag extends Model {}
  Tag.init({
      name: DataTypes.STRING
  }, { sequelize, modelName: 'tag' })
  // We save the return values of the association setup calls to use them later
  Product.User = Product.belongsTo(User);
  User.Addresses = User.hasMany(Address);
  Tag.Product = Tag.belongsTo(Product)
  // Also works for `hasOne`
// the defined model is the class itself
console.log(User === sequelize.models.User); // true
sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");