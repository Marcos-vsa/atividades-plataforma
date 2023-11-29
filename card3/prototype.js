class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      return { ...this };
    }
  
    represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
    }
  }
  
  class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    clone() {
      return { ...this };
    }
  
    represent() {
      return `${super.represent()}, Número de Portas: ${this.numeroPortas}`;
    }
  }
  
  class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, partidaEletrica) {
      super(modelo, marca, cor, numeroRodas);
      this.partidaEletrica = partidaEletrica;
    }
  
    clone() {
      return { ...this };
    }
  
    represent() {
      return `${super.represent()}, Partida Elétrica: ${this.partidaEletrica}`;
    }
  }
  
  class Aplicacao {
    static criarVeiculos() {
      return [
        new Carro("Sedan", "Toyota", "Azul", 4, 4),
        new Carro("Hatchback", "Honda", "Vermelho", 4, 2),
        new Moto("Esportiva", "Yamaha", "Preto", 2, true),
        new Moto("Cruiser", "Harley Davidson", "Prata", 2, false),
        new Carro("SUV", "Ford", "Verde", 4, 4),
        new Moto("Custom", "Ducati", "Branco", 2, true)
      ];
    }
  
    static clonarVeiculos(veiculos) {
      return veiculos.map(veiculo => veiculo.clone());
    }
  
    static imprimirRepresentacao(veiculos) {
        veiculos.forEach(veiculo => {
        console.log(veiculo.represent());
    });
    }
  }

    const veiculosOriginais = Aplicacao.criarVeiculos();
    console.log("Representação dos Veículos Originais:");
    Aplicacao.imprimirRepresentacao(veiculosOriginais);

  // Clonar veículos
    const veiculosClones = Aplicacao.clonarVeiculos(veiculosOriginais);
    console.log("\nRepresentação dos Veículos Clones:");
    Aplicacao.imprimirRepresentacao(veiculosClones);