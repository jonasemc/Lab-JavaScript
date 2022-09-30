let areaPintada = 115;
let coberturaTinta = areaPintada / 6;
let Lata = {
  litros: 18,
  preco: 80,
};

let Galao = {
  litros: 3.6,
  preco: 25,
};

let quantidadeLitrosLata = coberturaTinta / Lata.litros;
let quantidadeLitrosGalao = coberturaTinta / Galao.litros;

// console.log("Quantidade de latas: " + Math.ceil(quantidadeLitros));
// console.log("Preco: " + Math.ceil(quantidadeLitros) * Lata.preco + " R$");
console.log(Math.ceil(quantidadeLitrosLata));
console.log(Math.ceil(quantidadeLitrosGalao));
