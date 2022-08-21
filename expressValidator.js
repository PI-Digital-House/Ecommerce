//instalar o expressvalidator
// npm install express-validator

// a primeira importação do express-validator deve ser feita nas rotas
const { body } = require("express-validator")

// essa função é para validar cada u dos campos do formulário, e deixa escolher o que vamos validar. pelo post
// para isso precisamos que esteja dentro de um array, dentro da rota como:

const validacoes = [
    body('nome').isString().notEmpty(),
    body('email').isEmail().notEmpty(),
    body('senha').notEmpty(),
]
// depois disso colocar na rota onde queremos usar.

// para validar de um tipo 
//tem duas partes, uma na parte que fica nas rotas para validação e a outra que fica no controller

// na rota, não esquecer de colocar upload.single('img')

//não esquecer de mudar o código do jean para file e não texto e ao inves de colocar o input, colocar um select nas marcas

