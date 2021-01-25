// Os mutator methods, quando invocados, modificam o array.
const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.push("Ruby")); // "push" adiciona um novo elemento no final do array
console.log(languages.pop()); // "pop" remove do array o último elemento.
console.log(languages.unshift("Go")); // adiciona um novo elemento no início do array
console.log(languages.shift()); // remove um item do começo do array
console.log(languages.splice(1, 1)); // remove um item, que não está nem no começo nem no final do array, (posição do item a ser removido e quantidade de itens a serem removidos)
console.log(languages.splice(1, 0, "C++", "C#")); // Outra possibilidade do splice
console.log(languages); 
languages.reverse();
console.log(languages);
languages.fill("JavaScript");
console.log(languages);



// Usando o método sort: ao resultar -1 e 0, os itens do objeto permanecem inalterados. Ao resultar 1, os itens do objeto são invertidos de posição.
const linguagens = [
    {
        name: "Python",
        year: 1991
    },
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
linguagens.sort(function(a ,b) {
    return a.name.localeCompare(b.name) * -1;
});
console.log(linguagens);

