/* 
O tipo string é primitivo, imutável e é representado internamente pelo
padrão Unicode, codificado em UTF-16
*/

// Existem 3 formas de declarar uma string

// aspas simples:
console.log('JavaScript');

// aspas duplas:
console.log("JavaScript");

// Acento grave (crase):
console.log(`JavaScript`);

// Também é possível declarar uma string por meio da sua função construtora
console.log(new String('JAVASCRIPT'));
// a função construtora é mais lenta e pode prejudicar a performance


// Quebra de linha:
console.log('Quero quebrar a linha \n aqui');
console.log('Quero quebrar a linha \u000A aqui');
console.log('0 - Sun\n1 - Mon\n2 - Tue\n3 - Wed\n4 - Thu\n5 - Fri\n6 - Sat');

// Existem, também, caracteres de controle que podem ser utilizados 
// para quebrar linha, aumentar  a identação, entre outras coisas


// Sequência de escape Unicode

let comparacao1 = "café" 
let comparacao2 = "caf\u00e9"

console.log(comparacao1 === comparacao2);
