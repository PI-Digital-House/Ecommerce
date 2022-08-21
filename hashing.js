// hashing é a criptografia de arquivos sensiveis

npm install bcrypt --save

// importar para o arquivo que iremos ultilizar

const bcrypt = require('bcrypt')

const hash = bcrypt.hashSync('password', 12)

//precisa ter duas rotas para a senha que vai mudar


//no usuario controller
const fs = require('fs')
const path =require('path')
const bcrypt = require('bcrypt')

//criar o usuarios.json se não tiver

const usuario.JSON = path.join('usuarios.json')

no salvarForm // ou outro nome que tenha no controller de usuario

const {nome, email, senha} = req.body;
let senhaC= bcrypt.hashSync(senha, 10)
let usuario = json.stringfy({nome, email, senha: senhaC})

fs.whiteFileSync(usuario.json, usuario)
res.send('usuario cadastrado')



//como conferir se o valor da senha está correto


let hash = bcrypt;hashSync('1234', 10)
console.log(bcrypt.compareSync('1234, hash'))

//no usuario controller 
logarUsuario: (req, res)=>{
    let {email, senha} = req.body
    let usuarioSalvo = fs.readFileSync(usuario.json{enconding: utf-8})

    usuarioSalvo = json.Parse(usuarioSalvo)
    if (email != usuarioSalvo.email){
        return res.send(email != 'Usuário inválido!')
    }
    if(bcrypt;compareSync(senha, usuarioSalvo.senha)){
        return res.send('Senha inválida')
    }
    
    // se funcionou, redirecionar para a pagina que eu quero. Se não chora!
    res.redirect('/profile')

}
