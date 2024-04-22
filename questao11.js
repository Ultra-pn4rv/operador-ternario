/*
Questão 11: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria. 
*/
let idade = 18
let resultado = (idade>= 60)? "idoso" : (idade>= 18) ? "adulto" : (idade>= 12) ? "adolescente": (idade>= 4) ? "criança" : "neném";
console.log(resultado);