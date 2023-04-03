// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (index < (numbers.length - 1)) { // se não é o último
//     newArray.push(numbers[index] * numbers[index + 1]);
//   } else {
//     newArray.push(numbers[index] * 2);
//   }
// }

// console.log(newArray);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor 
// correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, 
// pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois 
// é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a 
// multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo: 

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers =[];

for (let index = 0; index < numbers3.length; index += 1) {
    if (index < (numbers3.length - 1))    {
        newNumbers.push(numbers3[index] * numbers3[index+1]);
    } else {
        newNumbers.push(numbers3[index] * 2);
    }
  }
console.log(newNumbers);