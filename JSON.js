/* JSON, ou JavaScritp Object Notation, é um formato de intercâmbio de dados, 
derivado da linguagem JavaScript, apesar de usado em praticamente todas as linguagens,  que foi descoberto por Douglas Crockford e 
padronizado pela ECMA-404. O JSON serve para troca de dados entre sistemas. JSON aceita os seguintes tipos de dados:
number, strig, boolean, object, array e null.
*/
// O método JSON.stringify converte um determinado tipo de dado para JSON.
console.log(JSON.stringify(10));
console.log(JSON.stringify("JavaScript"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify({name: "Self", paradigm: "OO"}));
console.log(JSON.stringify([1,2,3,4,5,6,7,8,9]));
console.log(JSON.stringify(null));

// O método JSON.parse faz o caminho inverso do método anterior, ou seja, converte um JSON para um determinado tipo de dado.
console.log(JSON.parse('10'));
console.log(JSON.parse('"JavaScript"'));
console.log(JSON.parse('true'));
console.log(JSON.parse('false'));
console.log(JSON.parse('{"name": "Self", "paradigm": "OO"}'));
console.log(JSON.parse('[1, 2, 3, 4, 5, 6, 7, 8, 9]'));
console.log(JSON.parse('null'));

// Comparando JSON's:
const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
console.log(book1 === book2);
console.log(JSON.stringify(book1) === JSON.stringify(book2));

// Clonando referências com JSON:
//const book3 = book2; (output: true)
const book3 = JSON.parse(JSON.stringify(book2)); // output: false
console.log(book2 === book3);
