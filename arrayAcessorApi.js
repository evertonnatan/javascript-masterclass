// indexOf: retorna a posição do primeiro elemento encontrado.
const languages = ["Python", "C", "C", "Java"];
console.log(languages.indexOf("Python"));
console.log(languages.indexOf("C"));
console.log(languages.indexOf("JavaScript")); // Ao buscar um elemento que não existe no array, o resultado será -1.

// lastIndexOf: retorna a posição do último elemento encontrado.
console.log(languages.lastIndexOf());
// includes: retorna true se o elemento existir
console.log(languages.includes("Java"));
console.log(languages.includes("JavaScript"));

// concat: retorna um novo array resultante da concatenação de um ou mais arrays.
const ooLanguages = [ "Smalltalk", "C++", "Simula" ];
const funcionalLanguages = [ "Haskell", "Scheme" ];
const languages2 = [].concat(ooLanguages, funcionalLanguages);
console.log(languages2);
console.log(ooLanguages);
console.log(funcionalLanguages);

// slice: retorna partes de um determinado array de acordo com a posição de início e fim
console.log(languages2.slice(0, 2)); // retornara os elementos da posição 0 até 2 -1 (n-1)
console.log(languages2.slice(2, 4)); // retornara os elementos da posição 2 até a posição 4 -1 (n-1)
console.log(languages2.slice(1)); // retornará todos os elementos a partir da posição 1 (até o final)

// join: converte o array para uma string, juntando os elementos com base em um separador.
console.log(languages2.join(";"));
console.log(languages2.join(","));
console.log(languages2.join(""));
