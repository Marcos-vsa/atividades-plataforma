class Galinha {
    cacarejar() {}
}

class Pato {
    grasnar() {}
}

class AdaptadorGalinha extends Galinha {
    constructor(pato) {
        super();
        this.pato = pato;
    }

    cacarejar() {
        this.pato.grasnar();
    }
}

const pato = new Pato();

const adaptador = new AdaptadorGalinha(pato);

adaptador.cacarejar();
