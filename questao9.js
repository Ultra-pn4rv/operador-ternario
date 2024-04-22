/*
Questão 9: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um ano é bissexto. A variável ano contém o ano a ser verificado. 
Atribua o resultado à variável resultado.
*/
let ano = 2001
let resultado = (ano % 400 == 0) ? "este ano é bissexto" : "este ano não é bissexto";
console.log(resultado);