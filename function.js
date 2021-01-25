// função é um objeto que contém um bloco de código executável

// function declaration:
function soma(a, b) {
    return a + b;
}
console.log(soma);
console.log(soma(2, 3));

// function expression:
const sum = function (a, b) {
    return a + b;
}
console.log(sum);
console.log(sum(2, 3));
// a grande diferença entre a function expression e a function declaration é que esta última sofre um processo chamado de hoisting (içamento).

/* Na linguagem JavaScript, as funções são de primeira classe, ou seja, podem ser atribuídas a uma variável, passadas por 
parâmetro ou serem retornada de uma outra função.
*/

const multi = function(a, b) {
    return a * b;
};

const subtract = function(a, b) {
    return a - b;
};

const calculator = function (fn) {
    return function (a, b) {
        return fn(a,b);
    };
};

console.log(calculator(multi)(2, 3));
console.log(calculator(subtract)(5, 2));

// É possível invocar uma funçõa com menos ou mais parâmetros, não necessariamente seguindo o que está declarado.
// Podemos definir valores padrão para cada um dos parâmetros de uma função.
// Por meio da variável implícita "arguments", é possível acessar os parâmetros da função invocada.
const exemplo = function() {
    console.log(arguments);
};
exemplo(1, 2, 3, 4, 5, 6, 7, 8, 9,);

// outro expemplo do uso de arguments:
const exemplo2 = function() {
    let total = 0;
    for (let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(exemplo2(1, 2, 3, 4, 5, 6, 7, 8, 9,));


// Também é possível acessar os parâmetros da função invocada por meio do rest parameter. O rest parameter deve ser sempre o último da lista de parâmetros.
const exemplo3 = function(...numbers) {
    let total2 = 0;
    for (let number of numbers) {
        total2 += number;
    }
    return total2;
};
console.log(exemplo3(1, 2, 3, 4, 5, 6, 7, 8, 9));


