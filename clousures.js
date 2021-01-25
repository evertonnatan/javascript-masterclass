// Na linguagem JavaScript, toda função permite a utilização de variáveis que não foram declaradas
// e nem passadas por parâmetro.

// O problema é que como as funções são de primeira classe, dependendo da situação, poderia existir uma 
// ambiguidade e isso foi resolvido com o conceito de clousure.

/* Em resumo, clousure é uma função com um scope chain estático que é definida no momento em que a função 
é criada, por isso, todas as funções na linguagem JavaScript são clousures. 
*/

// Exemplo 01:

function fn1() {
    const v1 = 10;
    return function() {
        console.log(v1);
    };
}
const fn2 = fn1();
const v1 = 100;
fn2();

// Exemplo 2:
const v2 = 11;
function fn3() {
    console.log(v2);
}
function fn4(fn3) {
    const v2 = 111;
    fn3();
}
fn4(fn3);

// Apesar de estático, o scope chain  faz referência a objetos que estão na memória e podem ser compartilhados por mais de uma função.

// Exemplo 3:
function fn5() {
    let v3 = 10;
    return {
        m1() {
            console.log(++v3);
        },
        m2() {
            console.log(--v3);
        }
    };
}
const objt1 = fn5();
objt1.m1();
objt1.m2();

// Exemplo 4, como "encarcerrar" uma variável:

// Como não se deve fazer:
const obj1 = {};
for (var v6 = 0; v6 < 3; v6++) {
    obj1[v6] = function () {
        console.log(v6);
    };
}
obj1[0] (); //3
obj1[1] (); //3
obj1[2] (); //3

// Um exemplo de como se deve fazer:
const obj2 = {};
for (var v7 = 0; v7 < 3; v7++) {
    obj2[v7] = (function () {
        console.log(this.v7);
    }).bind({v8: v7});
}
obj1[0] (); // deu errado
obj1[1] (); // deu errado
obj1[2] (); // deu errado