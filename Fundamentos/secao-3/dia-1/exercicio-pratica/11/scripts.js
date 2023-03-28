let salarioBruto = 3000;
let inss =0;
let ir=0;
if (salarioBruto<1556.94){
    inss=salarioBruto*0.08;
} 
else if (salarioBruto >=1556.94 && salarioBruto<2594.92) {
    inss=salarioBruto*0.09;
} 
else if (salarioBruto>=2594.92 && salarioBruto<5189.82) {
    inss=salarioBruto*0.11;
}
else {
    inss = 570.88;
}

let salarioInss = salarioBruto - inss;

if (salarioInss<1903.98){
    ir=0;
} 
else if (salarioInss >=1903.98 && salarioInss<2826.65) {
    ir=salarioInss*0.075 - 142.8;
} 
else if (salarioInss>=2826.66 && salarioInss<3751.05) {
    ir=salarioInss*0.11 - 354.8;
}
else if (salarioInss>=3751.05 && salarioInss< 4664.68) {
    ir=salarioInss*0.225 - 636.13;
}
else {
    ir=salarioInss*0.275 - 86936;
}
console.log("Salário líquido de: R$",salarioInss -ir);