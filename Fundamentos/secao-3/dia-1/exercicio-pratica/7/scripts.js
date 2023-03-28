// Utilize if/else para escrever um código que converta uma nota dada em 
// porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
let nota = 80;
if (nota>=90) {
    console.log("A");
}
else if (nota<90 && nota>=70) {
    console.log("B");
}
else if (nota<70 && nota>=50) {
    console.log("C");
}else if (nota<50 && nota>= 45) {
    console.log("D");
}
else {
    console.log("F");
}