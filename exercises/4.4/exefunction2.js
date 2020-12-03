
function maiorValor (numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
           

        }
    } return indiceMaior;
}


console.log (maiorValor([2, 3, 6, 7, 10, 1]));