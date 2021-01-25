// Promises são objetos resposáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta.

// Para criar uma promise, basta instanciá-la, executando a função resolve em caso de sucesso, sendo tratado por meio de then.

// Em caso de fracasso, a função reject deve ser executada, sendo tratada por meio de catch.

// É possível centralizar o tratamento de uma promise encadeando seus retornos.

// É possível executar várias promises ao mesmo tempo, retornando após todas terem sucesso, usando Promise.all

// Também é possível executar várias promises ao mesmo tempo, retornando após a primeira ter sucesso, usando o Promise.race.

// EXEMPLO:

function sum(a, b) {
        return new Promise(function (resolve, reject) {
            if (!a || !b) return reject("Invalid input");
            setTimeout(function() {
                resolve(a + b);
            }, Math.random() * 1000);
        }); 
}
console.time("performance");
Promise.race([
    sum(2, 2),
    sum(4, 4)
]).then(function(value) {
    console.log(value);
    return sum(value, value).then(function(result) {
        console.log(result);
        console.timeEnd("performance");
    });
}).catch(function(e) {
    console.log(e);
});
