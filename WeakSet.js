// WeakSet é um objeto, similar ao Set, que permite apenas valores do tipo Object
// e mantém as referências de forma fraca, sendo volátil e não irerável.

// Operação add:

const ws1 = new WeakSet();
const obj1 = {};
const obj2 = {};
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
// Operação delete: (retorna true se conseguir deletar o elemento ou false, se não)
console.log(ws1.delete(obj2));
// Operação has:
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));

// Para que serve um WeakSet? Serve para criar coleções de elementos, quando não há a preocupação com possíveis memory leaks.

const circles = new WeakSet();
function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}
Circle.prototype.calculateArea = function() {
    if (!circles.has(this)) throw "Invalid Object";
    return Math.PI * Math.pow(this.radius, 2);
}
const circle1 = new Circle(10);
const circle2 = {
    radius: 5
}
console.log(circle1.calculateArea());
console.log(circle1.calculateArea.call(circle2));
