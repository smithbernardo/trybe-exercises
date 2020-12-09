//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log(menorValor([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]));

function menorValor(array) {
  let arraySorted = array.sort();
  let menorVal = array[0];
  for (let i in array) {
    if (array[i] < menorVal) {
      menorVal = array[i];

    }
  }
  return menorVal;
}