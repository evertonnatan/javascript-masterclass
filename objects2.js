// utilizando o Object.assign:
/*
O método Object.assign faz cópias das propriedades dos objetos passados por parâmetro para o objeto alvo, que é retornado.
*/

// criando um objeto vazio:
const javascript = Object.create({});

// setando o objeto alvo:
Object.assign(javascript, {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
}, {
    author: "Brendan Eich",
    influencedBy: "Java, Scheme and Self"
});
console.log(javascript);

/*
O método Object.keys retorna as chaves das propriedades do Objeto
*/
const vingadores = {
    heroi: "Iron Man",
    poder: "Armadura",
    habilidade: "Inteligência"
};
console.log(Object.keys(vingadores));

// O método Object.values retorna os valores das propriedades do objeto:
const vingadores2 = {
    heroi: "Iron Man",
    poder: "Armadura",
    habilidade: "Inteligência"
};
console.log(Object.values(vingadores));

// O método Object.entries retorna as propriedaes do objeto em pares de chave e valor

const ligaDaJustica = {
    heroi: "Batman",
    poder: "Cinto de Utilidades",
    habilidade: "Bom de briga"
};
console.log(Object.entries(ligaDaJustica));

// O método Object.is compara dois objetos, considerando os tipos de dados, de forma similar ao operador ===

console.log(Object.is(NaN, NaN));

/*
defineProperty
configurable - permite que uma determinada propriedade seja apagada
enumerable - permite que uma determinada propriedade seja enumerada
value - define o valor de uma determinada propriedade
writable - permite que uma determinada propriedade tenha seu valor modificado
*/
// desta forma, as propriedades do objeto python não serão exibidas, uma vez que não estão enumeradas
const python = {};
Object.defineProperty(python, "name", {
    value: "Python"
});
console.log(python);
console.log(Object.keys(python));
console.log(Object.values(python));
console.log(Object.entries(python));
console.log(python.name);


// Para que as propriedades sejam exibidas basta setar:
const code = {};
Object.defineProperty(code, "name", {
    enumerable: true,    
    value: 'Code',
    writable: true
});
console.log(code);
console.log(Object.keys(code));
console.log(Object.values(code));
console.log(Object.entries(code));
console.log(code.name);

/* 
As operações preventExtensions, seal e freeze

preventExtensions - impede que o objeto tenha novas propriedades, mas permite modificar ou remover as propriedades existentes
seal - impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes
freeze - impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes
*/

const linux = {
    name: "Arch Linux",
    year: 1991,
    feature: "Difícil instalação"
};
Object.freeze(linux);
linux.name = "Debian";
linux.author = "Linus Torvald";
delete linux.year;
console.log(linux);
console.log(Object.isExtensible(linux));
console.log(Object.isSealed(linux));
console.log(Object.isFrozen(linux));