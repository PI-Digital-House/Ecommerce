// um arquivo que salva informações não sensiveis do lado do cliente.
//Mesmo fechando, ele pode continuar permanecendo. o tempo de usabilidade dos cookies, são feitos pelo programador. maxAge

// npm install cookie-parser  provavel que vai estar instalado já


//para manter logado. // fazer um input no html para o manter logado

//ir para o login controller



//para ver se funcionou, ir no inspecionar, depois para o storage, e depois cookies eo localhost.

//middleware de cookies

const fs = require('fs')
const path =require('path')





    const cookieLogin = (req, res, next)=>{
        if(req.cookies.login != undefined && req.session.usuario == null){
            const email = req.cookies.login;
            
            next();
        }
    }

    module.exports = cookieLogin