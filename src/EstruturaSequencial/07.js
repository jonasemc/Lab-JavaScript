//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
import AreaQuadrado from "../functions/AreaQuadrado.js";

let base = parseFloat(prompt("Digite a base do quadrado: "));
let altura = parseFloat(prompt("Digite a altura do quadrado: "));

console.log(
  "O dobro da area do quadrado eh: " + 2 * AreaQuadrado(base, altura).toFixed(2)
);
