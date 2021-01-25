/* 
Conceito de objeto: é uma coleção dinâmica de propriedades definidas por chaves, 
que podem ser do tipo String ou Symbol, e valores que podem ser de qualquer tipo de dado

É possível criar objetos de várias formas: 
*/
// pela notação literal: 
let objeto1 = {}

// por meio de uma função construtora 
new Object();

// a partir do método create da Object API
Object.create(null);

// exemplo de criação concisa de um objeto 

const title = "Clean Code";
const author = "Robert C. Martin";
const pages = 464;
const language = "English"
const available = true;
const book = {
    title,
    author,
    pages,
    language,
    available
}
console.log(book);

