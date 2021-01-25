// o tipo boolean é primitivo, imutável e representado pelas palavras reservadas true e false.


// A coerção de tipo acontece quando um tipo de dado é utilizado em um contexto em que ele é convertido
// de forma implícita ou explícita.

// somente estes itens serão convertidos para false, em JS:
/* 
!!0;
!!NaN;
!!"";
!!false;
!!undefined;
!!null;
*/
// nos casos abaixo, os dois pontos de exclamação farão a negação da negação, ou seja, a coerção de tipo (de forma implícita)
console.log(!!0);
console.log(!!NaN);
console.log(typeof NaN);
console.log(!!""); // string vazia
console.log(!!false);
console.log(!!undefined);
console.log(!!null);


// Estes serão verdadeiros:

// números negativos:
console.log(!!-10); 
// strings não vazias:
console.log(!!"JavaScript");
// objetos vazios:
console.log(!!{});
// arrays vazios:
console.log(!![]);
// expressões regulares:
console.log(!!/JavaScript/);
// Date:
console.log(!! new Date);
// funções vazias:
console.log(!!function () {});