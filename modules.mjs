// Por meio da palavra-chave "export" é possível exportar qualquer tipo de dado existente dentro de um módulo

// A palavra-chave "import" faz a importação de qualquer tipo de dado exportado para dentro do múdulo

import {PI as pi, pow} from './math2.mjs';
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return pi * pow(this.radius, 2);
    }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area);

/* 
Para utilizar modules no Node.js, os arquivos devem ter a extensão .msj,
além de executar com a flag --experimental-modules

É possível utilizar um alias na importação, renomeando o que estiver sendo importado.

Por meio do *, é possível importar tud que estiver sendo exportado em um único objeto.

Também podemos importar e exportar de forma padrão utilizando a palavra-chave "default"
*/
