'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('People', [{
        name: ,
        lastName: ,
        email: ,
        password: ,
        phone: ,
        birthDay: ,
        cpf: ,
        address: ,
        complementary: ,
        neighborhood: ,
        city: ,
        state: ,
        cep: ,
       referencePoint: 
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
