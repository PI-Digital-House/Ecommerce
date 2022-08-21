//nivel global para a saber onde o url entrou

const fs= require('fs')

function logSite(req, res, next){
fs.apendFileSync('log.txt', "O usuário entro naurl:" = req.url)

    next();
}

module.exports = logSite


// app.js configuração da logSite

const logMiddleware = require('a pasta do logSite')
app.use(lologMiddleware)

// tem que chamar o methodOverride('_method') para conseguir  fazer o put no html

//chamar o multer const multer = require ('multer') para aplicação por rotas
// o multer é para que as rotas sejam responsveis pelo upload de arquivos 

