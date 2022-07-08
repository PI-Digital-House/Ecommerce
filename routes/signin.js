var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Pagina Sign In Funcionando');
});

module.exports = router