let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorNum = 0;
let impares = 0;
let menorNum = 0;

for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]); // Percorra o array imprimindo todos os valores contidos nele com a função console.log().
    soma = soma + numbers[i]; //Some todos os valores contidos no array e imprima o resultado. 
    if (maiorNum<numbers[i]) { //Utilizando for, descubra o maior valor contido no array e imprima-o.
        maiorNum = numbers[i];
    }
    if (numbers[i] % 2 > 0){
        impares=impares+1;
    }
    if (menorNum>numbers[i]){ //Utilizando for, descubra o menor valor contido no array e imprima-o.

        menorNum=numbers[i];
    }
}

let media = soma/numbers.length;
if (media>20) { //Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”;
    console.log("Valor maior que 20");
} 
else {
    console.log("Valor menor ou igual a 20"); //caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
}

console.log("O resultado da soma é:",soma);
console.log("A média é ",media); //Calcule e imprima a média aritmética dos valores contidos no array. 
console.log("O maior número é ",maiorNum);
console.log("O menor número é ",menorNum);

if (impares>0){
console.log("A quantidade de números ímpares é",impares);
}
else {
    console.log('Nenhum valor ímpar encontrado');
}

let arraySoma =[];
let resultadoArray=0;
for (let i = 1; i<26;i++) { //Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
    
    arraySoma[i]=i;
    console.log(i," divido por 2 =", i/2); //Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
    
    resultadoArray=resultadoArray+arraySoma[i];
}
console.log("soma de 1 a 25 =",resultadoArray);
