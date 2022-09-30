//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
import Salario from "../functions/Salario.js";

let ganhoHora = parseFloat(prompt("Quanto voce ganha por hora: "));
let horasTrabalhadas = parseInt(
  prompt("Quantas horas voce trabalhou esse mes: ")
);

console.log(
  "O seu salario no referido mes eh: " + Salario(ganhoHora, horasTrabalhadas)
);
