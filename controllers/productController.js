const sequelize = require('sequelize');
const models = require('../models')
const Product = models.Product


module.exports ={
    async index(req,res ){
        const results =  await Customer.findAll();


        return res.json(results)

    },

    async create(req,res){

    },

    async update(req,res){

    },

    async delete(req,res){

    }
}