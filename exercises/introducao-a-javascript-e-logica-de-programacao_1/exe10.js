let valorCusto = 50;
let precoVenda = 80;
let imposto = (20 * valorCusto) / 100;
let custoTotal = valorCusto + imposto;
let qtidadeVendida = 1000;
let lucro = (qtidadeVendida * precoVenda) - (qtidadeVendida * custoTotal);

if (valorCusto < 0 || precoVenda < 0 || imposto < 0 || qtidadeVendida < 0) {
    console.log('Valores Invalidos!!!');
} else {
    console.log('Seu lucro pela venda de ' + qtidadeVendida + ' unidades, é de R$ ' + lucro + 'reais.');
}