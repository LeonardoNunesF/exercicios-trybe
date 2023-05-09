// Para fixar ainda mais o conceito de reduce, 
// faça uma função que some todos os números pares 
// do array numbers. Tente criar duas funções, uma 
// usando reduce e filter, e outra apenas usando reduce.
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const paresNumbers = (soma, pares) => (pares % 2 === 0) ? soma + pares: soma;
const somaPares = (array) => array.reduce(paresNumbers, 0);

console.log(somaPares(numbers));