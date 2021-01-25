// A forma mais simples de converter um número é por 
// meio da INVOVAÇÃO DA FUNÇÃO CONSTRUTORA Number


// JavaScript utiliza da coerção de tipo

console.log(Number("10"));
console.log(Number("9.9"));
console.log(Number("0xFF"));
console.log(Number("0b10"));
console.log(Number("0o10"));
console.log(Number("JavaScript"));

// Cuidado! Nem todos os operadores numéricos realizam a conversão
let vaiDarErro = "20" + 0;
console.log(vaiDarErro);

/*
O método "parseInt" permite converter uma String para um número.
Para isso, basta indicar o número e a sua base, que, caso não seja 
informada, será 10. 
*/

console.log(parseInt("11"));
console.log(parseInt("11", 2))
console.log(parseInt("9.9", 10)) 
console.log(parseInt("A", 16));
console.log(parseInt("010"));
console.log(parseInt("010", 8));



/* 
O método "parseFloat" é um pouco mais específico e 
converte apenas números no sistema de numeração decimal
*/
console.log(parseFloat("10"));
console.log(parseFloat("9.9"));
console.log(parseFloat("0xFF")); // nesse caso, o v8 entenderá apenas o "0" e desconsiderará a parte "xFF"
console.log(parseFloat("0b10")); // igual ao caso acima



