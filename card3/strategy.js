class Operation {
    execute(num1, num2) {}
  }
  
  class AdditionOperation extends Operation {
    execute(num1, num2) {
      return num1 + num2;
    }
  }
  
  class SubtractionOperation extends Operation {
    execute(num1, num2) {
      return num1 - num2;
    }
  }
  
  class MultiplicationOperation extends Operation {
    execute(num1, num2) {
      return num1 * num2;
    }
  }
  
  class Calculator {
    constructor(operation) {
      this.operation = operation;
    }
  
    setOperation(operation) {
      this.operation = operation;
    }
  
    calculate(num1, num2) {
      return this.operation.execute(num1, num2);
    }
  }
  
  function main() {
    const num1 = parseInt(prompt('Digite o primeiro número:'));
    const num2 = parseInt(prompt('Digite o segundo número:'));
    const operationType = prompt('Digite a operação (+, -, *):');
  
    let operation;
  
    switch (operationType) {
      case '+':
        operation = new AdditionOperation();
        break;
      case '-':
        operation = new SubtractionOperation();
        break;
      case '*':
        operation = new MultiplicationOperation();
        break;
      default:
        console.log('Operação inválida');
        return;
    }
  
    const calculator = new Calculator(operation);
  
    const result = calculator.calculate(num1, num2);
    console.log(`Resultado: ${result}`);
  }
  
  main();
  