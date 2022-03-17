let http = require('http')

//Criar o servidor e indicar em qual porta ele será aberto
http.createServer(function(req, res){
    //req = requisição
    //res = resposta para o usuário que acessa a aplicação
    res.end("Howdy, stranger!")
}).listen(8081)


console.log(`O servidor está rodando!`)

