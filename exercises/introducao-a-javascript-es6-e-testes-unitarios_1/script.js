//Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

const testingScope = escopo => {
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
   // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

  testingScope(true);

  //Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.

  console.log(oddsAndEvens);

  const oddsAndEvensSorted = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
return oddsAndEvens;
}
const sorted =  oddsAndEvensSorted();
console.log(`Os números ${sorted} se encontram ordenados de forma crescente!`);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(sort());

const factorial =number =>{
    let fact = 1;
    for (let i = number; i>=1; i-=1)
    fact = `${fact}`* [i]
    return fact
}
console.log(factorial(0));


longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = frase =>{
  
  let nova = frase.split(' ');
  let itemMaior;
  for(let i in nova){
    console.log(nova[i]);
    itemMaior = nova[0];
    if (itemMaior.length <= nova[i].length){
        itemMaior = nova[i];
      }else{
          itemMaior = itemMaior;
      }    
}console.log(`A maior palavra da Frase "${frase}" é "${itemMaior}"`);
}
longestWord('Moro em joao pessoa');


const subs = (frase) =>  {
  
 let newFrase =frase.replace('x', 'Bernardo')
return newFrase
}
console.log(subs('vou estudar x muito !'));


let frase = newFrase
let skills = ['html', 'js', 'css', 'python', 'node'];

function aptidoes(a){
  console.log(`${frase} Minhas cinco habilidades são:` )
  for (let i=0; i<a.length; i+=1){
    console.log(a[i]);
  }
}
aptidoes(skills)