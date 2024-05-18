const calcularInss = require('./calculo_inss')
const calculoImpostoRenda = require('./calculo_imposto_renda')

const salario = 2113;

console.log("Salario bruto: ", salario)
console.log("INSS: ", calcularInss(salario))
console.log("Imposto renda: ", calculoImpostoRenda(salario))