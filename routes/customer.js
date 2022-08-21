const customerController = require('../controllers/customerController')
const express = require('express');
const router = express.Router();

router.get('/login',customerController.login)
router.get('/new',customerController.new)
router.get('/:id',customerController.find)
router.post('/new',customerController.create)
router.put('/:id', customerController.update)
router.delete('/:id',customerController.delete)



module.exports = router;