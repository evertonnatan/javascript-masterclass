// operações bit a bit
// NÃO CONFUNDIR OS OPERADORES BIT A BIT "|" E "&"
// COM OS OPERADORES BOOLEANS "||" E "&&"

let calc = -2 >>> 1;
console.log(calc);

calc = (-2 >>> 0).toString(2).padStart(32, 0);
console.log(calc);

calc = (2147483647).toString(2).padStart(32, 0);
console.log(calc);