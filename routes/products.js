var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Pagina Products Funcionando');
  res.render('products', {title: "Kindle do Pedro"})
});

module.exports = router;