let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[1];
for (valor = 0; valor < numbers.length; valor += 1) {
    if (numbers[valor] < menorNumero) {
        menorNumero = numbers[valor];
    } else {
        menorNumero = menorNumero;
    }
}
console.log('O menor número é ' + menorNumero);