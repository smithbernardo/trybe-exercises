let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
quantidade = 0;
for (valor = 0; valor < numbers.length; valor += 1) {
    if (numbers[valor] % 2 != 0) {
        quantidade += 1;
    }
}
console.log('A quantidade de números ímpares é ' + quantidade)