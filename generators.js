// Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa.

function* forever() {
    let value = 1;
    while (true) {
        yield value++;
    }
}

function today() {
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
console.log(foreverGenerator.next())
today();
console.log(foreverGenerator.next);
console.log(typeof foreverGenerator.next);


// Os generators utilizam o método next para iterar sobre os valores disponíveis durante a execução da função.
// Ao encontrar um yield, a execução da função é pausada até o método next ser invocado novamente.
// O retorno do método next é um objeto contendo value e done, seguindo o protocolo de iteração.
// Por meio do yeld, é possível retornar valores de forma similar ao return.
// Além disso, também é possível enviar um valor para dentro do generator por meio do método next.

function createIterable(...array) {
    return {
        *[Symbol.iterator] () {
            let i = 0;
            while (i < array.length) {
                yield array[i++];
            }
        }
    }
}
const languages = createIterable("Fortran", " Lisp", "COBOL")
for (let language of languages) {
    console.log(language)
}

function sum(a, b) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(a + b)
        }, 1000)
    })
}

function async(fn) {
    const gen = fn();
    asyncR(gen);
}

function asyncR(gen, result) {
    const obj = gen.next(result);
    if (obj.done) return;
    obj.value.then (function(result) {
        asyncR(gen, result);
    })
}

async(function* () {
    const a = yield sum(2, 2)
    const b = yield sum(4, 4)
    const result = yield sum(a, b)
    console.log(result)
})