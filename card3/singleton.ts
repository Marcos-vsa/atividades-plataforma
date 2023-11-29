class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSuperSecreta";
  
    private constructor() {}
  
    public static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta. Bem-vindo, agente secreto!");
      } else {
        console.log("Acesso negado. Senha incorreta. Intruso detectado!");
      }
    }
  }
  
  // Programa principal
  const agenteSecreto = SistemaSeguranca.getInstance();
  
  // Tentativa de acessar a Base Secreta
  agenteSecreto.acessarBaseSecreta("senhaIncorreta"); // Acesso negado
  
  // Tentativa com a senha correta
  agenteSecreto.acessarBaseSecreta("senhaSuperSecreta"); // Acesso concedido
  