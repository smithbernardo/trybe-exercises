let salarioBruto = 3000.00;

let inss;
let ir;



if (salarioBruto < 1555.94) {
    inss = 0.08 * salarioBruto;
} else if (salarioBruto >= 1555.94 && salarioBruto < 2594.92) {
    inss = 0.09 * salarioBruto;
} else if (salarioBruto >= 2594.92 && salarioBruto < 5189.82) {
    inss = 0.11 * salarioBruto;
} else {
    inss = 570, 88;
}

let salarioSemInss = salarioBruto - inss;

if (salarioSemInss <= 1903.98) {
    ir = 0;
} else if (salarioSemInss <= 2826.65) {
    ir = (0.075 * salarioSemInss) - 142.80;
} else if (salarioSemInss <= 3751.05) {
    ir = (0.15 * salarioSemInss) - 354.80;
} else if (salarioSemInss <= 4664.68) {
    ir = (0.225 * salarioSemInss) - 636.13;
} else {
    ir = (0.275 * salarioSemInss) - 869.36;
}
let salarioLiquido = salarioSemInss - ir;

console.log('Seu salario liquido será de R$ ' + salarioLiquido + 'reais')
console.log(inss);
console.log(ir);
console.log(salarioSemInss)