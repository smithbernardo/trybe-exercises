function maiorCaracteres(array){
    maiorString = 0;
    for (let possib = 0; possib < array.length; possib += 1){
        if (array[possib].length > array[possib + 1].length){
            maiorString = array[possib];
        }
        maiorString = maiorString;
    }return maiorString;
}

console.log(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);