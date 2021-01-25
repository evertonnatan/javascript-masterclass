// As classes são um tipo de função que atuam como um template para a criação de objetos

// class declaration:
class Square {

}
console.log(Square);

// class expression:
const Triangle = class {

}
console.log(Triangle)
console.log(typeof Triangle)

// As classes, diferentes das funções, não sofrem hoisting, não importando a forma como foram declaradas.
// As classes são formadas por 3 tipos de membros:

// constructor: é invocado no momento da instaciação de uma classe e serve para inicializar um determinado objeto
class Square1 {
    constructor(side) {
        this.side = side;
    }
}
const square1 = new Square1(4);
console.log(square1)

// prototype methods: dependem de uma instância para serem invocados
class Square2 {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} area: ${this.calculateArea}`;
    }
}
const square2 = new Square(4);
console.log(square2.toString());
//console.log(square2.calculateArea());

// static methods