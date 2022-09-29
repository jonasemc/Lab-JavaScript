//Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));
let n4 = parseFloat(prompt("Digite a quarta nota: "));

const media = (n1 + n2 + n3 + n4) / 4;

console.log("A media do bimestre eh: " + media.toFixed(2));
