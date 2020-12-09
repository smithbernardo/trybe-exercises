//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

console.log(numImpar([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));

function numImpar(array) {
  let impares = [];
  let qtidade = 0;
  for (let i in array) {
    if (array[i] % 3 == 0) {
      impares.push(array[i]);
      qtidade += 1;
    }

  }
  return ('A qtidade de numero impares é de ' + qtidade + '. E os números são: ' + impares);
}