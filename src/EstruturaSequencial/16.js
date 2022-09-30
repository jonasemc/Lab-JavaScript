//Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
let areaPintada = 91;
let coberturaTinta = areaPintada / 3;
let Lata = {
  litros: 18,
  preco: 80,
};

let quantidadeLitros = coberturaTinta / Lata.litros;

console.log("Quantidade de latas: " + Math.ceil(quantidadeLitros));
console.log("Preco: " + Math.ceil(quantidadeLitros) * Lata.preco + " R$");
