//Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.

let n1 = parseInt(prompt("Digite um numero inteiro qualquer: "));
let n2 = parseInt(prompt("Digite outro numero inteiro qualquer: "));
let n3 = parseFloat(prompt("Digite um numero real qualquer: "));

console.log(
  "o produto do dobro do primeiro com metade do segundo: " + 2 * n1 * (n2 / 2)
);
console.log("a soma do triplo do primeiro com o terceiro: " + (3 * n1 + n3));
console.log("o terceiro elevado ao cubo: " + n3 * n3 * n3);
