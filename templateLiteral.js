// Um template literal é uma forma de declarar uma String, permitindo a interpoçação de expressões.

// Sem template literal:

let host = "localhost";
let port = "3000";
let resource = "users";
let url = "https://" 
console.log(url + host + ":" + port + "/" + resource);

// Com template literal:

console.log(`${url}${host}:${port}/${resource}`);

/* 
Além da Interpolação de expressões é possível, também, declarar uma String multlinha, 
sem a necessidade de caracteres especiais.

*/

// Outras vantagems do template literal:
// Exeplo:

let monthsOfYear = "0 - Jan" // nesse caso, a saída será, somente a primeira linha ("0 - Jan")
"1 - Feb"
"2 - Mar"
"3 - Apr"
"4 - May"
"5 - Jun"
"6 - Jul"
"7 - Aug"
"8 - Sep"
"9 - Oct"
"10 - Nov"
"11 - Dec"

console.log(monthsOfYear);


// Exemplo 2:

let mesesDoAno = "0 - Jan" +
"1 - Feb" +
"2 - Mar" +
"3 - Apr" +
"4 - May" +
"5 - Jun" +
"6 - Jul" +
"7 - Aug" +
"8 - Sep" +
"9 - Oct" +
"10 - Nov" +
"11 - Dec" 

console.log(mesesDoAno);

/*let mesesDoAno2 = "0 - Jan\ // outra forma de fazer o interpretador ir até o fina da string, que está em mais de uma linha [por alguma razão, não funcionou]
1 - Feb\
2 - Mar\
3 - Apr\
4 - May\
5 - Jun\
6 - Jul\
7 - Aug\
8 - Sep\
9 - Oct\
10 - Nov\
11 - Dec";

console.log(mesesDoAno2);
*/


let mesesDoAnoComTemplate = `0 - Jan
1 - Feb
2 - Mar 
3 - Apr
4 - May
5 - Jun
6 - Jul
7 - Aug
8 - Sep
9 - Oct
10 - Nov
11 - Dec `

console.log(mesesDoAnoComTemplate);