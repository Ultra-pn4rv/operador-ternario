/*
Questão 13: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel. 
*/
let idade = 65
let sexo = 'masculino'
let resultado = (idade>= 62 && sexo == 'feminino' || idade>= 65 && sexo == 'masculino') ? "pode se aposentar" : "não pode se aposentar";
console.log(resultado);