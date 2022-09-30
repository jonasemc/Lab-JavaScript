import Salario from "../functions/Salario.js";

let ganhoHora = parseFloat(prompt("Quanto voce ganha por hora: "));
let horasTrabalhadas = parseInt(
  prompt("Quantas horas voce trabalhou esse mes: ")
);

let salarioBruto = Salario(ganhoHora, horasTrabalhadas);
let inss = salarioBruto * 0.08;
let ir = salarioBruto * 0.11;
let sindicato = salarioBruto * 0.05;
let descontos = inss + ir + sindicato;
let salarioLiquido = salarioBruto - descontos;

console.log("+ Salário Bruto : " + salarioBruto + "R$");
console.log("- IR (11%) : " + ir + "R$");
console.log("- INSS (8%) : " + inss + "R$");
console.log("- Sindicato ( 5%) : " + sindicato + "R$");
console.log("= Salário Liquido : " + salarioLiquido + "R$");
