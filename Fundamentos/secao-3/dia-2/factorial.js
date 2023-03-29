//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let num = 10;
if (num === 0 || num === 1)
    console.log(1);
for (let i = num - 1; i >= 1; i--) {
    num *= i;
}
console.log(num);
