// fazendo uma declaração:
var pi = 3.149215;
console.log(pi);

// fazendo uma reatribuição:
pi = 3;
console.log(pi);

// fazendo uma redeclaração:
var pi = 4.5;
console.log(pi);

/* AO USAR VAR, A VARIÁVEL É DECLARADA E INICIALIZADA NO ESCOPO DA FUNÇÃO,
NÃO RESPEITANDO BLOCO E PERMITINDO A REDECLARAÇÃO E REATRIBUIÇÃO.
*/

/* AO USAR LET, A VARIÁVEL É DECLARADA NO ESCOPO DA FUNÇÃO, MAS SÓ É 
INICIALIZADA POSTERIORMENTE, RESPEITANDO BLOCO E PERMITINDO REATRIBUIÇÃO,
MAS NÃO PERMITINDO A REDECLARAÇÃO.
*/

/* AO USAR CONST, A VARIÁVEL É DECLARADA NO ESCOPO DA FUNÇÃO, MAS SÓ É 
INICIALIZADA POSTERIORMENTE, RESPEITANDO BLOCO E NÃO PERMITINDO REATRIBUIÇÃO NEM 
REDECLARAÇÃO.
*/

// Ao declarar uma variável sem o var, let ou const, ela é criada no escopo global.