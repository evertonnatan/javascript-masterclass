// Por meio das operações call e apply, é possível invocar uma função passando o this por parâmetro.


const calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};
const circle = {
    radius: 10,
    calculateArea
};
console.log(calculateArea.apply(circle));
console.log(calculateArea.call(circle));
// No caso acima, o call e o apply funcionam de forma similares.

// Então, qual é a diferença entre call e apply?
// A principal diferença entre os dois é a forma como se passa os parâmetros, exemplo:

const calculateArea2 = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle2 = {
    radius: 10,
    calculateArea2
};
console.log(calculateArea.call(circle, Math.round));
console.log(calculateArea.apply(circle, [Math.ceil])); // note que a presença dos colchetes!

// A operação bind permite encapsular o this dentro da função, retornando-a.
// Exemplo:

const calculateArea3 = function(fn) {
    return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle3 = {
    radius: 10,
    calculateArea3
};
const calculateAreaForCircle = calculateArea3.bind(circle3);
console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));

