function soma(array) {
  let soma = 0;

  for (let i in array) {
    soma += array[i];
  }
  console.log(soma / array.length);
  if (soma / array.length > 20) {
    return 'Média maior que vinte';
  } else {
    return ' Valor menor que 20';
  }


}

console.log(soma([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));