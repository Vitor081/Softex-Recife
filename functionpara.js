var readline = require('readline-sync');

var valor = readline.questionFloat('Digite sua preço do produto:');
var porc = readline.questionFloat('Digite EM NUMEROS quantos (%) de desconto:');

function desconto(){
var reais = (valor/100)*porc
console.log('Você ganhará ${reais} em reais sob o valor do produto!')
return
}

desconto(valor, porc);