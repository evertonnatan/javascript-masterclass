// Um map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado.

const timeUnits = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);
//console.log(Array.from(timeUnits));
// size: retorna a quantidade de elementos do Map
console.log(timeUnits.size);
// set: adiciona um novo par de chave e valor ao Map
timeUnits.set("Day", 86400);
console.log(timeUnits);
// forEach: itera sobre o Map
timeUnits.forEach(function (value, key) {
    console.log(key, value);
}) 
// has: retorna true se a chave existir e false se não.
console.log(timeUnits.has("Day"));
// get: retorna o valor da chave ou undefined se a chave não existir
console.log(timeUnits.get("second"));
console.log(timeUnits.get("Week"));
// delete: remove um par de chave valor do Map
timeUnits.delete("Day");
console.log(timeUnits);
// clear: remove todas os elementos do Map
timeUnits.clear();
console.log(timeUnits);

// Quais as diferenças de um Map para um Objeto?

const obj = {};
obj [10] = "Number";
obj ["10"] = "String"
obj [true] = "Boolean"
obj ["true"] = "String";
console.log(obj [10]);
console.log(obj ["10"]);
console.log(obj [true]);
console.log(obj ["true"]);

// Ou seja, uma das diferenças entre Object e Map é que no Object as chaves são Strings ou Symbols. Se for outra coisa, será convertido para String.


const map = new Map();
map.set(10, "Number")
map.set("10", "String")
map.set(true, "Boolean")
map.set("true", "String")
console.log(map.get(10))
console.log(map.get("10"))
console.log(map.get(true))
console.log(map.get("true"))
