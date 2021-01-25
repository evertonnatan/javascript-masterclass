// Iterables são convenções implementadas por Arrays, Maps, Sets  e Strings que os tornam iteráveis por meio de um protocolo de iteração.

// Concatenando Arrays:
const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "JavaScript"];
const languages = [...classicLanguages, ...modernLanguages];
console.log(languages)

// Todo Iterable tem uma propriedade de chave Symbol.iterator que define o protocolo de iteração para o objeto.
const languages1 = ["Golang", "Java", "PHP"];
const iterator = languages1[Symbol.iterator] ();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Outro exemplo de iterables:
function createIterator(...array) {
    let i = 0
    return {
        next() {
            if (i < array.length) {
                return {
                    value: array[i++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    };
}
const iterator1 = createIterator("Ferrari", "BMW", "Ford");
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());