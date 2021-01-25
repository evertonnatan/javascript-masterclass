// Recurso trazido no ES06 e que, a partir dele, podemos extrair valores de arrays e objetos
// de uma forma mais simples e direta.

// É possível extrair valores de um array criando variáveis em ordem, de acordo com a posição de cada element.

// Assim como nas funções, é possível definir valores padrão para cada uma das variáveis

const language = "C".split(";");
const [name = "-", author = "-", year = "-"] = language;
console.log(name, author, year);

// Para extrair valores de um objeto, é necessário referenciar a chave de cada uma das propriedades.

const language2 = {
    nome: "Python",
    autor: "Guido Van Rossum",
    ano: 1989
};
const {nome, autor, ano} = language2;
console.log(nome, autor, ano);

// É possível definir nomes diferentes para as variáveis em relação as chaves das propriedades.

const heroi = {
    alcunha: "Batman",
    uniforme: "Preto",
    poder: "Inteligência"
};
const {alcunha: a, uniforme: u, poder: p} = heroi;
console.log(a, u, p);

// Podemos, também, referenciar as propriedades de objetos que estão dentro de outros objetos.
// Podemos aplicar destructuring, também, nos parâmetros de uma função, tanto com arrays quanto com objetos.

// Fazendo um destructuring de objetos:
const sum = function ({a, b}) {
    return a + b;
};
console.log(sum({a: 2, b: 3}));
