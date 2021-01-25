// Operadores de comparação

// igual:
console.log(1 == 2);
console.log(0 == '');
console.log(0 == '0');
console.log(0 == '\n');

// diferente:
console.log('a' != 'b');

// estritamente diferente:
console.log(3 !== 2);

//  maior que
console.log(5 > 4);

// maior ou igual a:
console.log(3 >= 2);


// OPERADORES LÓGICOS

// operador "and"
console.log(0 || 2);
console.log(1 || 2);
console.log(1 && 2);
console.log(0 && 2);

// praticando:

function generateSerial(max) {
    if (!max) {
        max = 1000;

    }
    return Math.floor(Math.random() * max);
}

console.log(generateSerial(1000));
console.log(generateSerial(100));
console.log(generateSerial(10));
console.log(generateSerial());

// OPERADOR TERNÁRIO: {(expressão booleana) ? true : false}

console.log((10) ? 'good' : 'bad');
console.log((0) ? 'good' : 'bad');