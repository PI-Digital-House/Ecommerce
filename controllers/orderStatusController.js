const sequelize = require('sequelize');
const models = require('../models')
const OrderStatus = models.OrderStatus


module.exports ={
    async index(req,res ){
        const results =  await OrderStatus.findAll();


        return res.json(results)

    },

    async create(req,res){

    },

    async update(req,res){

    },

    async delete(req,res){
        
    }
}