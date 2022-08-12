const sequelize = require('sequelize');
const models = require('../models')
const Customer = models.Customer


module.exports ={
    async index(req,res ){
        const results =  await Customer.findAll();


        return res.json(results)

    },

    async create(req,res){
        const { name, lastName, createdAt, updatedAt} = req.body

        await Customer.create({ name,lastName,createdAt,updatedAt})

        return res.status(201).send();

    },

    async update(req,res){
        const {id} = req.params;

        const {name, lastName, createdAt, updatedAt} = req.body

        await Customer.update({name, lastName, createdAt, updatedAt},
        {
            where: {id}
        })

        return res.status(201).send();
    },

    async delete(req,res){

        const {id} = req.params;

        await Customer.destroy({where:{id}})

        return res.status(201).send();
    }
}