/* A comparação dos objetos é feita por meio da sua referência, assim, ainda que 
dois objetos tenham exatamente as mesmas propriedades, eles serão considerados diferentes.
*/

// Uma das formas para comparar os objetos é analisando cada uma das suas propriedades por meio da comparação das chaves e valor

// Comparando propriedades de objetos:

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};
let equal = true;
for (let key in book1) {
    if (book1 [key] !== book2[key]) equal = false;
}
for (let key in book2) {
    if (book1[key] !== book2[key]) equal = false;
}
console.log(equal);
