//Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
import { PesoIdealHomem } from "../functions/PesoIdeal.js";

let altura = parseFloat(prompt("Digite sua altura: "));

console.log("Seu peso ideal eh: " + PesoIdealHomem(altura).toFixed(2) + " Kg");
