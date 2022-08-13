const sequelize = require('sequelize');
const models = require('../models');
const { index, update } = require('./customerController');
const CreditCard = models.CreditCard

module.exports ={
    async index(req,res ){
        const results =  await CreditCard.findAll();


        return res.json(results)

    },

    async create(req,res){

    },

    async update(req,res){

    },

    async delete(req,res){
        
    }
}