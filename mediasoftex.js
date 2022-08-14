var readline = require('readline-sync');

var media = 0
var nota1 = readline.questionFloat('Digite sua primeira nota');
var nota2 = readline.questionFloat('Digite sua segunda nota');
var nota3 = readline.questionFloat('Digite sua terceita nota');
media = (nota1 + nota2 + nota3)/3;
return media<7 ? console.log('Reprovado') : console.log('Aprovado');
    


