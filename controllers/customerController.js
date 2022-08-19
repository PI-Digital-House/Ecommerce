const sequelize = require('sequelize');
const models = require('../models')
const Customer = models.Customer


module.exports ={
    async index(req,res ){
        const results =  await Customer.findAll();


        return res.json(results)

    },

    async find(req,res){
        const {id} = req.params

        const customer = await Customer.findByPk(id)

        return res.render("profile",{customer})

    },

    async create(req,res){
        const {
            name,
            lastName,
            email,
            password,
            phone,
            birthDay,
            cpf,
            address,
            complementary,
            neighborhood,
            city,
            state,
            cep,
            referencePoint,
            createdAt,
            updatedAt} = req.body

        await Customer.create({
            name,
            lastName,
            email,
            password,
            phone,
            birthDay,
            cpf,
            address,
            complementary,
            neighborhood,
            city,
            state,
            cep,
            referencePoint,
            createdAt,
            updatedAt})

        return res.status(201).send();

    },

    async update(req,res){
        const {id} = req.params;

        const {
            name,
            lastName,
            email,
            password,
            phone,
            birthDay,
            cpf,
            address,
            complementary,
            neighborhood,
            city,
            state,
            cep,
            referencePoint,
            createdAt,
            updatedAt} = req.body

        await Customer.update({
            name,
            lastName,
            email,
            password,
            phone,
            birthDay,
            cpf,
            address,
            complementary,
            neighborhood,
            city,
            state,
            cep,
            referencePoint,
            createdAt,
            updatedAt},
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