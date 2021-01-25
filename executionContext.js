/* O Execution Context é o ambiente em que o código é executado, sendo composto pelo
variable object, scope chain e this.

Dentro de uma função, é possível acessar variáveis existentes fora dela, por meio do scope chain.

Não é possível acessar de fora uma variável que foi declarada dentro de uma função.

Toda função têm uma variável this que contêm uma referência para o objeto responsável pela sua invocação.

*/

// Demonstração:
const v1 = 10;
const fn1 = function () {
    const fn2 = function () {
        console.log(v1);
    }
    fn2();
};
fn1();

// Usando o that:

const obj1 = {
    p1: 1000,
    getP1: function() {
        const that = this;
        const fn1 = function() {
            return that.p1;
        }
        return fn1();
    }
};
console.log(obj1.getP1());
