const express = require("express") //Importação
const app = express() // Faz a instância 
//Qualquer coisa que for usar do express, será a partir do app
// const evita que a variável seja sobrescrita, deixa a aplicação mais segura

// Rotas criadas
app.get("/",function(req,res){
    res.send("Howdy, stranger!")
})

app.get("/info",function(req,res){
    res.sendFile(__dirname + "/HTML/info.html")
})

app.get("/data",function(req,res){
    res.send("Página de data")
})

// Configurando uma rota com parâmetros
app.get("/ola/:nome",function(req,res){
    //res.send(req.params) // Parâmetros da requisição
    res.send(`<h1>Howdy, ${req.params.nome}!</h1>`)
})

//Carregando arquivo HTML
app.get("/file",function(req,res){
    res.sendFile(__dirname + "/HTML/index.html") //__dirname é o diretório raiz
})

app.listen(8081,function(){ //deve ser a última linha de código relacionada ao express
    console.log("Servidor rodando em localhost:8081")
}) 

// Função de callback é toda função executada sempre que algum evento acontece
