
const sequelize = require('sequelize');
const models = require('../models')
const Brand = models.Brand


module.exports ={
    async index(req,res ){
        const results =  await Brand.findAll();


        return res.json(results)

    },

    async create(req,res){
        const {brand} = req.body

        await Brand.create({brand})

        return res.status(201).send();



    },

    async update(req,res){



        return res.status(201).send();

    },

    async delete(req,res){
        
    }
}