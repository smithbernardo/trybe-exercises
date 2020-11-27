let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
for (valor = 0; valor < numbers.length; valor += 1) {
    soma = soma + numbers[valor];
}
var media = soma / numbers.length;
if (media > 20) {
    console.log(' A média é maior que 20');
} else {
    console.log(' A média é menor que 20');
}