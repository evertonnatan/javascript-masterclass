/* 
Com o operador "instaceof" é possível verificar se um objeto foi criado por meio de uma 
determinada função construtora, analisando a sua cadeia de protótipos.
*/

//Exemplos:
const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object); // retornará true, uma vez que há objetos na cadeia de protótipos
console.log(date instanceof Array); // retornará false, uma vez que não há array na cadeia de protótipo

// Qual a diferença entre typeof e instanceof?

const _instanceof = function(obj, fn) {
    if (obj === fn.prototype) return true;
    if (obj == null) return false;
    return _instanceof(obj.__proto__, fn);
};
const date1 = new Date();
console.log(date1 instanceof Date);
console.log(date1 instanceof Object); 
console.log(date1 instanceof Array);
console.log((_instanceof(date1, Date)));
console.log((_instanceof(date1, Object)));
console.log((_instanceof(date1, Array)));