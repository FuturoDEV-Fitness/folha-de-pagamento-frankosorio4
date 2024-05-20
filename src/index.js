const readline = require('readline');
const calcularInss = require('./calculo_inss');
const calculoImpostoRenda = require('./calculo_imposto_renda');
const calculoSalarioLiquido = require('./calculo_salario_liquido');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomeEmpregado = "";
let cpfEmpregado = "";
let salarioBruto = 0;

function obterData(questionText) {
    return new Promise((resolve) => {
        input.question(questionText, (response) => resolve(response.trim()));
    });
}

async function main() {
    nomeEmpregado = await obterData("Digite o nome do Empregado: ");

    while (true) {
        cpfEmpregado = await obterData("Digite o cpf do Empregado (só números): ");
        if (!isNaN(cpfEmpregado) && Number(cpfEmpregado) > 0 && cpfEmpregado.length === 11) {
            break;
        }
        console.log("CPF inválido. O CPF deve ser um número de 11 dígitos maior que zero.");
    }

    while (true) {
        const salario = await obterData("Digite o salário bruto do Empregado (só números): ");
        if (!isNaN(salario) && Number(salario) > 0) {
            salarioBruto = Number(salario);
            break;
        }
        console.log("Salário deve ser um número maior que zero.");
    }

    input.close();

    const INSS = calcularInss(salarioBruto);
    const impostoRenda = calculoImpostoRenda(salarioBruto);
    const salarioLiquido = calculoSalarioLiquido(salarioBruto);

    console.log("--- Folha de pagamento ---");
    console.log(`Nome: ${nomeEmpregado}`);
    console.log(`CPF: ${cpfEmpregado}`);
    console.log(`Salário bruto: R$ ${salarioBruto}`);
    console.log(`INSS: R$ ${INSS}`);
    console.log(`Imposto Renda: R$ ${impostoRenda}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido}`);
}

main();

//------------------------ last-------------------------
// let nomeEmpregado = "";
// let cpfEmpregado = "";
// let salarioBruto = 0;

// input.question("Digite o nome do Empregado: ",(nome) =>{
//     nomeEmpregado = nome.trim();
//     input.question("Digite o cpf do Empregado(só numeros): ",(cpf) =>{

//         if(isNaN(cpf) || Number(cpf.trim()) <= 0 || !(cpf.length === 11)){
//             console.log("cpf Invalido");
//             input.close();
//             return;
//         }
//         cpfEmpregado = cpf.trim();
//         input.question("Digite o salario bruto do Empregado(só numeros): ",(salario) =>{
//             if(isNaN(salario) || Number(salario.trim()) <= 0){
//                 console.log("Salario debe ser um numero maio que zero!");
//                 input.close();
//                 return;
//             }
//             salarioBruto = Number(salario.trim());
//             input.close();

//             let INSS = calcularInss(salarioBruto);
//             let impostoRenda = calculoImpostoRenda(salarioBruto);
//             let salarioLiquido = calculoSalarioLiquido(salarioBruto);
            
//             console.log("--- Folha de pagamento ---");
//             console.log(`Nome: ${nomeEmpregado}`);
//             console.log(`CPF: ${cpfEmpregado}`);
//             console.log(`Salário bruto: R$ ${salarioBruto}`);
//             console.log(`INSS: R$ ${INSS}`);
//             console.log(`Imposto Renda: R$ ${impostoRenda}`);
//             console.log(`Salário Líquido: R$ ${salarioLiquido}`);
//         });
//     });
// });