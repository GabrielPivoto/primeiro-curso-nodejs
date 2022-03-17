let somaFunc = require("./somar")
let subFunc = require("./subtrair")
let multFunc = require("./multiplicar")
let divFunc = require("./dividir")

let a = 4
let b = 0

console.log(`O valor da soma de ${a} e ${b} é ${somaFunc(a,b)}`)
console.log(`O valor da subtração de ${a} e ${b} é ${subFunc(a,b)}`)
console.log(`O valor da multiplicação de ${a} e ${b} é ${multFunc(a,b)}`)
console.log(`O valor da divisão de ${a} e ${b} é ${divFunc(a,b)}`)