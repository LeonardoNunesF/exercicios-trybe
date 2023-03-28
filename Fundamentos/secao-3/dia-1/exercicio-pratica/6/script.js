// Utilize switch/case para escrever um código que receba 
// o nome de uma peça de xadrez e retorne os movimentos 
// que ela pode fazer.
let peca="peão";
switch (peca){
    case "peão":
        console.log("O peão se move uma casa para frente e come uma casa na diagonal frontal. No primeiro movimento, o peão pode mover-se 2 casas para frente");
        break;
    case "torre":
        console.log("A torre se move para frente e os lados o quanto quiser.");
        break;
    case "cavalo":
        console.log("O cavalo se move em formato de L, seja 1 casas para frente e 2 para o lado, ou 2 para frente e 1 para o lado.");
        break;
    case "bispo":
        console.log("O bispo se move o quanto quiser para as diagonais.");
        break;
    case "rainha":
        console.log("A rainha se move para onde quiser, somente nao se move igual o cavalo.");
        break;
    case "rei":
        console.log("Similar a rainha, o rei se move por onde quiser, porém só se move 1 casa.");
        break;
}