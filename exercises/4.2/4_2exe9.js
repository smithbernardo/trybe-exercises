//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

function criarArray(param) {
  let seq = [];
  for (let i = 1; i <= param; i += 1) {
    seq.push(i / 2);
  }
  return seq;
}
console.log(criarArray(25));