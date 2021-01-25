// O operador new permite a criação de objetos, por meio das funções construtoras e classes.
const person = {
    name: "Linus Torvalds",
    city: "Helsinki",
    year: 1969,
    getAge() { // usando o method notation
        return (new Date()).getFullYear() - this.year;
    }
};

const person1 = {
    name: "Bill Gates",
    city: "Seatlle",
    year: 1955,
    getAge() { // usando o method notation
        return (new Date()).getFullYear() - this.year;
    }
};
console.log(person);
console.log(person1);
console.log(person.getAge());
console.log(person1.getAge());



// Como criar um objeto  a partir da mesma estrutura??
// Pode-se usar a função fábrica, que é um tipo de padrão que retorna um novo objeto, após ser invocada diretamente.

// criando uma função construtora:
const creatPerson = function(name, city, year) {
    return {
        name,
        city,
        year,
        getAge() {
            return (new Date()).getFullYear - this.year;
        }
    };
};
const person2 = creatPerson("Linus Torvalds", "Helsinki", 1969);
const person3 = creatPerson("Bill Gates", 'Seatlle', 1955);
console.log((person2));
console.log(person2.getAge());
console.log(person3);
console.log(person3.getAge);

// Note, no output, que "getAge" aparece duplicado. Como eliminar a duplicação e reutilizar propriedades entre os objetos?

// Utilizando protótipos:

const personPrototype = {
    getAge() {
        return (new Date()).getFullYear() - this.ano;
    }
};
const criarPessoa = function(nome, cidade, ano) {
    const pessoa = {
        nome,
        cidade,
        ano
    };
    Object.setPrototypeOf(pessoa, personPrototype);
    return pessoa;
};
const pessoa1 = criarPessoa("Bruce Wayne", "Gotham", 1980);
const pessoa2 = criarPessoa("Clark Kent", "Smallville", 1975);
console.log(pessoa1);
console.log(pessoa1.__proto__);
console.log(pessoa1.getAge());
console.log(pessoa2);
console.log(pessoa2.__proto__);
console.log(pessoa2.getAge());
console.log(pessoa1.__proto__ === pessoa2.__proto__);

// A função construtora retorna um novo objeto ao ser invocada por meio do operador "new"
// Por convenção, as funções contrutoras são iniciadas com letra maiúscula.
// Toda função tem uma propriedade chamada prototype, que é vinculada ao __proto__ do objeto criado pelo operador new

// Um pouco de complexidade:

const _new = function(fn, ...params) {
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    fn.apply(obj, params);
    return obj;
}
const Person = function(heroi, habilidade, idade) {
    this.heroi = heroi;
    this.habilidade = habilidade;
    this.idade = idade;
};
Person.prototype.getIdade = function() {
    return (new Date()).getFullYear() - this.idade;
};
const heroi1 = _new(Person, "Batman", "Estrategista", 1975);
const heroi2 = _new(Person, "Iron Man", "Inteligência", 1981);
console.log(heroi1);
console.log(heroi1.__proto__);
console.log(heroi1.getIdade());
console.log(heroi2);
console.log(heroi2.__proto__);
console.log(heroi2.getIdade());
console.log(heroi1.__proto__ === heroi2.__proto__);
