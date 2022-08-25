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

        const {email,password} = req.body

         const user = await Customer.findOne({attributes: ['id','email', 'password'],
              where: {
                email
              }
             })
             if(user === null){
                return res.status(400).send("Login ou Senha invalido")

             }else{
                const comparepass = await bcrypt.compare(password, user.password)
                if(user.email === email && comparepass === true){
                    const idCustomer = await Customer.findByPk(user.id)
                    res.render('profile',{idCustomer})
                }else{
                    if(!comparepass){
                        res.status(400).send("Login ou senha invalido")
                    }
                }
             }






    },

    async new(req,res){
        res.render('cadastro')
    },

    async create(req,res){
        const {
            email,
            password,
            cpf} = req.body

        const encrypted = bcrypt.hashSync(password, 10)


        if(!email || !password || !cpf){

            return res.status(400).send("Preencha os dados")
        }else{

             await Customer.create({email,password:encrypted,cpf})

             const user = await Customer.findOne({attributes:['id','email']},{where:{email}})

            res.render('cadastro')

            
        }


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