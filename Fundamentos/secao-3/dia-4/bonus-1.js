let roman = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
};

function stringRoman(numero) {
    numero = numero.toLowerCase();
    let len = numero.length;
    let soma = roman[numero[len - 1]];
    let atual = roman[numero[len - 1]];
    for (let i = 2; i <= len; i += 1) {
        let prox = roman[numero[len - i]];
        if (atual <= prox) {
            soma += prox;
        }
        else {
            soma -= prox;
        }
        atual = prox;
    }
    return soma;
}

console.log(stringRoman('MMXVII'));
console.log(stringRoman('MCMCDCLIV'));
console.log(stringRoman('VI'));
console.log(stringRoman('IV'));