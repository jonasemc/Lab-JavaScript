//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
import CalculaAreaCirculo from "../functions/AreaCirculoPeloRaio.js";

let raio = parseFloat(prompt("Digite o raio de um circulo: "));
console.log("A area do circulo eh: " + CalculaAreaCirculo(raio).toFixed(2));
