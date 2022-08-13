const sequelize = require('sequelize');
const models = require('../models')
const Category = models.Category


module.exports ={
    async index(req,res ){
        const results =  await Category.findAll();


        return res.json(results)
    },

    async create(req,res){

    },

    async update(req,res){

    },

    async delete(req,res){
        
    }
}