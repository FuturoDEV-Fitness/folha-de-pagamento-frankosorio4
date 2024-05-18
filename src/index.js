const calcularInss = require('./calculo_inss')
const calculoImpostoRenda = require('./calculo_imposto_renda')
const calculoSalarioLiquido = require('./calculo_salario_liquido')

const salario = 1550;

console.log("Salario bruto: ", salario)
console.log("INSS: ", calcularInss(salario))
console.log("Imposto Renda: ", calculoImpostoRenda(salario))
console.log("Salario Liquido: ", calculoSalarioLiquido(salario))