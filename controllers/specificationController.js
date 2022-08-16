const sequelize = require('sequelize');
const models = require('../models')
const Specification = models.Specification

module.exports ={
    async index(req,res ){
        const results =  await ShippmentStatus.findAll();


        return res.json(results)

    },

    async create(req,res){
        const {
            productId,
            size,
            model,
            description,
            color,
            follow} = req.body

        await Specification.create({
            productId,
            size,
            model,
            description,
            color,
            follow
        })

        return res.status(201).send();

    },

    async update(req,res){
        const {id} = req.params

        const {
            productId,
            size,
            model,
            description,
            color,
            follow} = req.body

        await Specification.update({
            productId,
            size,
            model,
            description,
            color,
            follow

        },{where:{id}})

        return res.status(201).send();

    },

    async delete(req,res){
        const {id} = req.params;

        await Specification.destroy({where:{id}})

        return res.send(200).send();

    }
}