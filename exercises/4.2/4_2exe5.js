// Utilizando for , descubra qual o maior valor contido no array e imprima-o;



function maiorNumero(array) {
  let maiorValor = 0;
  for (let i in array) {
    if (array[i] > maiorValor) {
      maiorValor = array[i];
    }
  }
  return maiorValor;
}
console.log(maiorNumero([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));