const customerController = require('../controllers/customerController')
const express = require('express');
// const auth = require('../middlewares/auth')
// const validacoes = require('../middlewares/expressValidator')
const router = express.Router();

router.get('/login',customerController.getlogin)
router.post('/login', customerController.login)

router.get('/new',customerController.new)
router.post('/new',customerController.create)

router.put('/new/:id', customerController.update)

router.delete('/:id',customerController.delete)



module.exports = router;