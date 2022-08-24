const { json } = require('sequelize');
const sequelize = require('sequelize');

const fs = require('fs');
const path =require('path');

const bcrypt = require('bcrypt')
// const { validationResult } = require('express-validator');
// const hash = bcrypt.hashSync('password', 12)
const models = require('../models');
const { emit } = require('process');
const Customer = models.Customer;


module.exports ={

    async getlogin(req,res ){
        return res.render('login')
    },

    async login(req,res){

        const {id,email,password} = req.body

         const user = await Customer.findOne({attributes: ['email', 'password'],
              where: {
                email
              }
             })

            const comparepass = await bcrypt.compare(password, user.password)

             if(comparepass === true && user.email === {email}){
                return console.log("Ta funcionando")
             }








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

        const encrypted = bcrypt.hashSync(password, 10)

        await Customer.create({email,password:encrypted,cpf})

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