//Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7

import { PesoIdealMulher, PesoIdealHomem } from "../functions/PesoIdeal.js";

let altura = parseFloat(prompt("Digite sua altura: "));
let sexo = parseInt(
  prompt(
    "Digite o numero correspondente a seu sexo: \n 1 - homem \n 2 - mulher"
  )
);

if (sexo == 1) {
  console.log(
    "Seu peso ideal eh: " + PesoIdealHomem(altura).toFixed(2) + " Kg"
  );
} else if (sexo == 2) {
  console.log(
    "Seu peso ideal eh: " + PesoIdealMulher(altura).toFixed(2) + " Kg"
  );
} else {
  console.log("valor invalido");
}
