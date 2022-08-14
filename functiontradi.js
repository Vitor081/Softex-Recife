var readline = require('readline-sync');

var nota1 = readline.questionFloat('Digite sua primeira nota');
var nota2 = readline.questionFloat('Digite sua segunda nota');

function media(){
 media = (nota1 + nota2)/2
 media > 7 ? console.log('Você esta aprovado') : console.log('Você esta reprovado!')
}

media();
