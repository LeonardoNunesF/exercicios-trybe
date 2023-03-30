let saldo = 500;

function soma(numero) {
    return numero + saldo;
};

function subract(numero) {
    return saldo - numero;
};

function multi(numero) {
    return numero * saldo;
};

function divi(numero) {
    return saldo/numero;
};

console.log(soma(200));
console.log(subract(40));
console.log(multi(5));
console.log(divi(30));