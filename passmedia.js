var readline = require('readline-sync');

var nota1 = readline.questionFloat('Digite sua primeira nota');
var nota2 = readline.questionFloat('Digite sua segunda nota');
var media = 21 - (nota1 + nota2)

if (media < 10)
    console.log ('A nota necessaria na 3º prova pra passar por media é ${media}')
else
    console.log ('A nota necessaria na 3º prova pra passar por media é superior a 10. Você esta REPROVADO!')

