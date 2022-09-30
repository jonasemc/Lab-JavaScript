//Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
import FahrenheitParaCelsius from "../functions/FahrenheitParaCelsius.js";

let fahrenheit = parseFloat(
  prompt("Digite a temperatura em graus fahrenheit: ")
);

console.log(
  "A temperatura convertida eh: " +
    FahrenheitParaCelsius(fahrenheit).toFixed(2) +
    " °C"
);
