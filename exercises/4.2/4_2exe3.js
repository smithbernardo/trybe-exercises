// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;


function soma(array) {
  let soma = 0;
  for (let i in array) {
    soma += array[i];
  }
  return soma / array.length;
}

console.log(soma([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));