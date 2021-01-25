const rectangle = {
    x: 10,
    y: 2,
    get area() {
        return this.x * this.y;        
    }
};
console.log(rectangle.area);

// É importante utilizar nomes diferentes para a função setter e a propriedade do objeto.

const square = {
    set x(x) {
        this._x = x;
    },
    set y(y) {
        this._y = y;
    },
    get area(){
        return this._x * this._y;
    }
};
square.x = 15;
square.y = 2;
console.log(square.area);

/* Por meio da operação defineProperty da Object API, também é possível definir funções do tipo getter e setter. */

const square2 = {};
Object.defineProperty(square2, "x", {
    set(x) {
        if (x > 0) {
            this._x = x;
        } else {
            console.log("Invalid value for x");
        }
    }
});
Object.defineProperty(square2, "y", {
    set(y) {
        if (y > 0) {
            this._y = y;
        } else {
            console.log("Invalid value for y");
        }
    }
});
Object.defineProperty(square2, "area", {
    get() {
        return this._x * this._y;
    }
});
square2.x = 20;
square2.y = 3; 
console.log(square2.area);