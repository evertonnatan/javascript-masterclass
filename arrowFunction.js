// As arrows functions têm abordagens mais simples e direta para escrever uma função e podem melhoras a legibilidade do código em diversas situações.

// Exemplo sem usar arrow function:
const sum = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
    return a - b;
};
const calculator = function(fn) {
    return function(a, b) {
        return fn(a, b);
    };
};
console.log(calculator(sum) (2, 2));
console.log(calculator(subtract) (4, 2));

// Exemplo usando arrow function
// Numa arrow function o uso do return é dispensado, uma vez que ele é automático

const multi = (a, b) => a * b;
const divide = (a, b) => a / b;
const calcular = (fn) => {
    return (a, b) => {
        return fn(a, b)    };
};
console.log(calcular(multi)(5, 5));
console.log(calcular(divide)(50, 10));

/* As arrow function não possuem suas próprias variávies this e arguments.*/

/*const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: () => {
        return (new Date()).getFullYear() - this.year;
    }
};
console.log(person);
console.log(person.getAge());
*/

// Como retornar um objeto de dentro de uma arrow function:
const createPerson = (name, city, year) => ({name, city, year}); // é necessário colocar parenteses em torno do objeto
const person = createPerson("Alan Kay", "Springfield", 1940);
console.log(person);


