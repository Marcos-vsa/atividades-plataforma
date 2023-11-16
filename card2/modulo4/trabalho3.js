// Objeto Banco
const Banco = {
    conta: 123456,
    saldo: 1000,
    tipoConta: 'Corrente',
    agencia: '001',
  
    // Método para buscar saldo
    buscarSaldo: function() {
      return this.saldo;
    },
  
    // Método para realizar depósito
    deposito: function(valor) {
      this.saldo += valor;
      return `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
  
    // Método para realizar saque
    saque: function(valor) {
      if (valor > this.saldo) {
        return 'Saldo insuficiente';
      } else {
        this.saldo -= valor;
        return `Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
      }
    },
  
    // Método para obter número da conta
    numeroConta: function() {
      return this.conta;
    }
  };
  
  // Exemplos de uso
  console.log('Saldo atual:', Banco.buscarSaldo());
  console.log(Banco.deposito(500));
  console.log(Banco.saque(200));
  console.log('Número da conta:', Banco.numeroConta());
  