const { json } = require('sequelize');
const sequelize = require('sequelize');
// const { validationResult } = require('express-validator');
const models = require('../models');
const Customer = models.Customer;


module.exports ={

    async login(req,res ){

        return res.render('login')

    },

    async logCustomer(req,res){
        const {email,password,logged} = req.body

        const customerSaved = fs.readFileSync(customer.json())
    },

    async new(req,res){
        res.render('cadastro')
    },

    async find(req,res){
        const {id} = req.params

        const customer = await Customer.findByPk(id)

        return res.render("profile",{customer})

    },

    async create(req,res){
        const {
            email,
            password,
            cpf} = req.body

        await Customer.create({email,password,cpf})

        return res.send(201).send();

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