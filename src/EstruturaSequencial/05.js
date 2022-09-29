//Faça um Programa que converta metros para centímetros.
import MetrosParaCentimetros from "../functions/MetrosParaCentimetros.js";

let metros = parseFloat(prompt("Digite o valor em metros a ser convertido:"));
console.log("O valor convertido eh: " + MetrosParaCentimetros(metros) + " cm");
