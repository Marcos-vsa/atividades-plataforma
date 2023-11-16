try {
    // Solicita ao usuário para inserir dois números
    var numero1 = prompt("Digite o primeiro número:");
    var numero2 = prompt("Digite o segundo número:");

    // Converte os valores para números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Verifica se as conversões foram bem-sucedidas
    if (isNaN(numero1) || isNaN(numero2)) {
        // Se um dos valores não for um número, lança uma exceção
        throw new Error("Pelo menos um dos valores inseridos não é um número válido.");
    }

    // Realiza uma operação matemática (por exemplo, a divisão)
    var resultado = numero1 / numero2;

    // Exibe o resultado
    console.log("Resultado da divisão:", resultado);

} catch (erro) {
    // Captura a exceção e exibe uma mensagem de erro
    console.error("Ocorreu um erro:", erro.message);

} finally {
    // O bloco finally é executado independentemente de ocorrer uma exceção ou não
    console.log("Bloco finally executado.");
}
