const prompt = require("prompt-sync")();

const valor1 = parseFloat(prompt('Digite o primeiro valor:'));
const valor2 = parseFloat(prompt('Digite o segundo valor:'));
const operador = prompt('Digite o operador (+, -, *, /):');

function calcular(valor1, valor2, operador) {
    let resultado;
    let resto;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = Math.floor(valor1 / valor2); // Resultado da divisão
                resto = valor1 % valor2; // Resto da divisão
            } else {
                return 'Erro: Divisão por zero.';
            }
            break;
        default:
            return 'Operador inválido';
    }

    if (resto !== undefined) {
        return `Resultado: ${resultado}, Resto: ${resto}`;
    } else {
        return `Resultado: ${resultado}`;
    }
}

const resultado = calcular(valor1, valor2, operador);
console.log(resultado);