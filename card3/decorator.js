class Sanduiche {
    getDescricao() {
      return "Sanduíche";
    }
  
    getCusto() {
      return 0;
    }
  }
  
  class SanduicheFrangoAssado extends Sanduiche {
    getDescricao() {
      return "Sanduíche de Frango Assado";
    }
  
    getCusto() {
      return 4.5;
    }
  }
  
  class AdicionalDecorator extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    getDescricao() {
      return this.sanduiche.getDescricao();
    }
  
    getCusto() {
      return this.sanduiche.getCusto();
    }
  }
  
  class PepperoniDecorator extends AdicionalDecorator {
    constructor(sanduiche) {
      super(sanduiche);
    }
  
    getDescricao() {
      return `${this.sanduiche.getDescricao()}, Pepperoni`;
    }
  
    getCusto() {
      return this.sanduiche.getCusto() + 0.99;
    }
  }
  
  class QueijoMussarelaRaladoDecorator extends AdicionalDecorator {
    constructor(sanduiche) {
      super(sanduiche);
    }
  
    getDescricao() {
      return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }
  
    getCusto() {
      return this.sanduiche.getCusto() + 2.0;
    }
  }
  
  const sanduicheBase = new SanduicheFrangoAssado();
  const sanduicheComPepperoni = new PepperoniDecorator(sanduicheBase);
  const sanduicheFinal = new QueijoMussarelaRaladoDecorator(sanduicheComPepperoni);
  
  console.log(`${sanduicheFinal.getDescricao()} custa $${sanduicheFinal.getCusto().toFixed(2)}`);
  