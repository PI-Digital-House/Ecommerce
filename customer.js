const customerController = require('../controllers/customerController')
// const express = require('express');
const auth = require('../middlewares/auth');
const validacoes = require('../middlewares/expressValidator')

const { body } = require("express-validator")

const validacoes = 
{
    login:[
    body('email').isEmail().notEmpty(),
    body('password').notEmpty().isLength({min:6})],
 create:[
     body('email').isEmail().notEmpty(),
     body('password').isString.notEmpty().isLength({min:6}),
     body('cpf').isNumeric().notEmpty().isLength({min:11},{max:11})
 ]
}
// const validacoes = require('../middlewares/expressValidator')
const router = express.Router();

router.get('/login', customerController.getlogin)
router.post('/login',validacoes, auth, customerController.login)

router.get('/new',customerController.new)
router.post('/new', validacoes, customerController.create)

router.put('/new/:id', customerController.update)

router.delete('/:id',customerController.delete)



module.exports = router;