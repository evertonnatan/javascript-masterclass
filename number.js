// o tipo number é primitivo, imutável e é representado
// internamente pelo padrão IEEE 754 de 64 bits


// o JS suporta 4 sistemas de numeração, quais sejam:
// decimal (base 10)
// hexadecimal (base 16)
// binário (base 2)
// octal (base 8)

// Usando a função construtora do número:
new Number(10);
new Number(9.9);
new Number(0xFF);
new Number(0b10);
new Number(0o10);

/* 
Os métodos "toExponencial", "toFixed" e "toPrecision"
podem ser utilizados para mudar a forma como um número é 
representado.
*/

// O método toExponential() retorna uma string  representando o objeto Number por meio de notação exponencial.

var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77 .toExponential());     // logs 7.7e+1

// O método toFixed() formata um número utilizando notação de ponto fixo.
// Ou seja, fixa uma determinada quantidade de cadas após a vírgula

var numObj = 12345.6789;

numObj.toFixed();       // Retorna '12346': note o arredondamento, não possui nenhuma parte fracionária
numObj.toFixed(1);      // Retorna '12345.7': note o arredondamento
numObj.toFixed(6);      // Retorna '12345.678900': note que adicionou zeros
(1.23e+20).toFixed(2);  // Retorna '123000000000000000000.00'
(1.23e-10).toFixed(2);  // Retorna '0.00'
2.34.toFixed(1);        // Retorna '2.3'
2.35.toFixed(1);        // Retorna '2.4'. Note que arredonda para cima neste caso.
-2.34.toFixed(1);       // Retorna -2.3 (devido à precedência do operador, literais de números negativos não retornam uma string...)
(-2.34).toFixed(1);     // Retorna '-2.3' (...a menos que se utilize parênteses)

// O método toPrecision() retorna uma string que representa o valor do objeto Number com uma precisão específica.
// Ou seja, completa um número até que ele alcance o total de algarismos especificados.

function precise(x) {
    return Number.parseFloat(x).toPrecision(4);
  }
  
  console.log(precise(123.456));
  // expected output: "123.5"
  
  console.log(precise(0.004));
  // expected output: "0.004000"
  
  console.log(precise('1.23e+5'));
  // expected output: "1.230e+5"