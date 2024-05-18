const calcularInss = require('./calculo_inss')
const calculoImpostoRenda = require('./calculo_imposto_renda')

function calculoSalarioLiquido(salarioBruto){
    return salarioBruto - calcularInss(salarioBruto) - calculoImpostoRenda(salarioBruto)
}

module.exports = calculoSalarioLiquido;