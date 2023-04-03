//Escreva um algoritmo que, dado um valor n positivo, 
// ou seja, n > 1, imprima na tela um quadrado feito de 
// asteriscos de tamanho n. Por exemplo: 
let n = 5;
let repeat = '*';
let prinT = '';
for (let i =0; i<n;i++){
    prinT =  prinT + repeat;
}
for (let i =0; i<n;i++){
    console.log(prinT);
}

// //Faça o mesmo algoritmo que antes, mas de modo que 
// imprima um triângulo retângulo com 5 asteriscos de 
// base. Por exemplo:
prinT = '';
for (let i =0; i<n;i++){
    console.log(prinT);
    prinT =  prinT + repeat;
}