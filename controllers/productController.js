const sequelize = require('sequelize');
const models = require('../models');
const Product = models.Product


module.exports ={
    async index(req,res ){
        const results =  await Product.findAll();

        return res.json(results)
        // return res.render('registerProducts.ejs', {results})
       

    },

    async create(req,res){
        const {
            name,
            price,
            weight,
            categoryId,
            brandID,
            amount} = req.body

        return res.render('registerProducts.ejs', await Product.create({name,price,weight,categoryId,brandID}))

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