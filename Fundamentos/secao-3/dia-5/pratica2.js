// 1 – Crie uma função que ligue e desligue o motor de um carro
const ligaDesliga = (status) => (
    (status) === 'Ligado' ? 'Desligado' : "Ligado" 
)
console.log(ligaDesliga('Ligado'));
console.log(ligaDesliga('Desligado'));
console.log();

// 2 – Crie uma função que calcule a área de um círculo
const areaCirculo = (raio) => {
    return `Área do circulo é ${2*Math.PI*raio}`;
}
console.log(areaCirculo(10));

// 3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

const maiorFrase = (frase) => {
    let maiorPalavra = '';
    const fraseArray = frase.split(' ');
    for (word of fraseArray) {
        if (maiorPalavra.length < word.length) {
            maiorPalavra = word;        
        }
    }
    return `A maior palavra da frase é ${maiorPalavra}.`;
}
console.log(maiorFrase('Antônio foi ao banheiro e não sabemos o que aconteceu'));
console.log();

//Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

const maiorFrase2 = frase2 => frase2.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];
console.log(maiorFrase2("Antonio foi ao banheiro e não sabemos o que aconteceu"));
