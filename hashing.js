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
    
    // se funcionou, redirecionar para a pagina que eu quero. Se nãog               chora!
    res.redirect('/profile')

}



// no app.js 
// não esquecer de colocar ->
app.use(express.json());


app.post ('/a rota que eu for usar, cadastrar para o cadastro né :)', async (res, res)=>{
   // const dados = req.body para usar o que fica melhor do que req.body
// o número utilizado poder ser qualquer um, mas geralmene usass o número 10 ou 12, por ser mais seguro.
    const dados = req.body 
    
    dados.password = await bcrypt.hash(dados, 10);
    
    console.log(dados)

    await //a model que eu for usar, acho que é customer // 
    Custumer.create((dados))
    .then(()=>{
        return res.json({
            erro:false,
            mensagem: 'usuário cadastrado com sucesso'
        })
    })
.catch(()=>{
    return res.status(400).json({
        erro:true,
        mensagem: 'usuário não cadastrado, tente novamente'
    })
})

});

app.post ('/login', (req, res) => {
   //  console.log(req.body);
   // nesta linha vai procurar por um usuário no bd e ver se os atributos estão corretos
   const user = await Custumer.findOne({
    attributes: ['email', 'password'],
    where: {
        email: req.body.email
    }
   });
   // aqui caso seja nuelo, vai retornar um status com uma msg
   if(user === null){
    return res.status(404)({
        erro: true,
        mensagem: 'Erro: email ou senha incorreta'
    })
   }
   // nesta linha, vamos comparar a senha criptografada
   if(!(bcrypt.compare(req.body.password, user.password))){
    return res.status(404).json({
        erro: true,
        mensagem: 'Erro: email ou senha incorreta'
    })
   }
   // esse é o estático para testar
    if(req.body.email != sabrina.miyamoto@gmail.com){
        return res.status(404)({
            erro: true,
            mensagem: 'email ou senha incorreto'
        })
    }
    if(!(await bcrypt.compare(req.body.password, 'valor estatico por enquanto'))){
        return res.json({
            erro: false,
            mensagem:'Login'
        })
    }

    return res.json({
        erro: false,
        mensagem: 'Login'
    })
})