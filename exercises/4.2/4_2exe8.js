//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

function criarArray(param) {
  let seq = [];
  for (let i = 1; i <= param; i += 1) {
    seq.push(i);
  }
  return seq;
}
console.log(criarArray(25));