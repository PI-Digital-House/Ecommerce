const customerController = require('../controllers/customerController')
const express = require('express');
const router = express.Router();

router.get('/customer',customerController.index)
router.post('customer',customerController.create)









module.exports = router;