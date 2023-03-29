//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = array[0];

for (let i =0;i<array.length;i++) {
    if (maiorPalavra.length<array[i].length) {
        maiorPalavra = array[i];
    }
    if (menorPalavra.length>array[i].length) {
        menorPalavra = array[i];
    }
}
console.log('Maior palavra é ',maiorPalavra);
console.log('Menor palavra é ', menorPalavra);
