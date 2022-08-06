const sequelize = require('sequelize')

const Customer = require('../models/customer')(sequelize)


module.exports ={
    async index(req,res ){
        const results =  Customer.findAll();

        return res.json(results)

    },

    async create(req,res){
        const { name, lastname, createdAt, updatedAt} = req.body

        await Customer.create({ name,lastname,createdAt,updatedAt})

        return res.status(201).send();

    }
}