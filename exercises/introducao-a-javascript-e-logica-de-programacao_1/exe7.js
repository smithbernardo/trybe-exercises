let nota = -5;



if (nota >= 90 && nota <= 100) {
    console.log('Parabéns, você tirou nota A');
} else if (nota >= 80 && nota < 90) {
    console.log('Parabéns, você tirou nota B');
} else if (nota >= 70 && nota < 80) {
    console.log('Parabéns, você tirou nota C');
} else if (nota >= 60 && nota < 70) {
    console.log('Parabéns, você tirou nota D');
} else if (nota >= 50 && nota < 60) {
    console.log('Parabéns, você tirou nota E');
} else if (nota >= 0 && nota < 50) {
    console.log('Parabéns, você tirou nota C');
} else {
    console.log('Nota incorreta');
}