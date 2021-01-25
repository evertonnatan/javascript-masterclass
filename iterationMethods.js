// Os iteration methods, quando invocados, iteram sobre os elementos do array.

// forEach: executa a função passada por parâmetro para cada elemento.
const frameworks = ["Angular.js", "Ember.js", "Vue.js"];
frameworks.forEach((framework) => console.log(framework));

// filter: retorna um novo array contendo somente os elementos que retornaram tue
// na função passada por parâmetro.
const frameworks2 = [
    {
        name: "Django",
        contributors: 1548
    },
    {
        name: "Flask",
        contributors:746
    },
    {
        name:"Bottle",
        contributors: 240
    }
];
const result = frameworks2.filter(function (frame) {
    return frame.contributors < 1000;
});
console.log(result);
