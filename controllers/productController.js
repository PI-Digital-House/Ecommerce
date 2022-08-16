const sequelize = require('sequelize');
const models = require('../models');
const Product = models.Product


module.exports ={
    async index(req,res ){
        const results =  await Product.findAll();


        return res.json(results)

    },

    async create(req,res){
        const {
            name,
            price,
            weight,
            categoryId,
            brandID,
            specificationId,
            amount} = req.body

        await Product.create({
            name,
            price,
            weight,
            categoryId,
            brandID,
            specificationId,
            amount
        })

        return res.status(201).send();

    },

    async update(req,res){
        const {id} = req.params;

        const {
            name,
            price,
            weight,
            categoryId,
            brandID,
            specificationId,
            amount} = req.body

           await Product.update({
            name,
            price,
            weight,
            categoryId,
            brandID,
            specificationId,
            amount

            },{where:{id}});

    },

    async delete(req,res){
        const {id} = req.params

        await Product.detroy({where:{id}});

    }
}