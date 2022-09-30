//Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
import CelsiusParaFahrenheit from "../functions/CelciusParaFahrenheit.js";

let celsius = parseFloat(prompt("Digite a temperatura em graus celsius: "));

console.log(
  "A temperatura convertida eh: " +
    CelsiusParaFahrenheit(celsius).toFixed(2) +
    " °F"
);
