// O set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado

const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);
console.log(Array.from(charsets));
//size: retorna a quantidade de elementos
console.log(charsets.size)
// add: adiciona um elemento:
const pilotos = new Set();
pilotos.add("Alonso")
pilotos.add("Massa")
pilotos.add("Hamilton")
pilotos.add("Vettel")
console.log(pilotos)
// forEach: itera sobre o set:
charsets.forEach(function (charset) {
    console.log(charset)
}) 
// has: retorna true se o elemento existir
console.log(charsets.has("ASCII"))
// delete: remove um elemento:
console.log(charsets.delete("ISO-8859-1"))
console.log(charsets)