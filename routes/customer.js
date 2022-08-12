const customerController = require('../controllers/customerController')
const express = require('express');
const router = express.Router();

router.get('/',customerController.index)
router.post('/',customerController.create)
router.put('/:id', customerController.update)
router.delete('/:id',customerController.delete)








module.exports = router;