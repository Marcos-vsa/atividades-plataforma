class Computer {
    constructor(ram, hdd, cpu, type) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return this.type;
    }

    toString() {
        return `${this.type} - RAM: ${this.getRAM()}, HDD: ${this.getHDD()}, CPU: ${this.getCPU()}`;
    }
}

// Implementação do produto PC
class PC extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, "PC");
    }
}

// Implementação do produto Server
class Server extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, "Server");
    }
}

// Fábrica abstrata para criar instâncias de computadores
class ComputerFactory {
    static createComputer(type, ram, hdd, cpu) {
        if (type.toLowerCase() === "pc") {
            return new PC(ram, hdd, cpu);
        } else if (type.toLowerCase() === "server") {
            return new Server(ram, hdd, cpu);
        }
        throw new Error(`Tipo de computador não suportado: ${type}`);
    }
}

const pc = ComputerFactory.createComputer("PC", "8GB", "1TB", "3.2GHz");
const server = ComputerFactory.createComputer("Server", "16GB", "2TB", "2.8GHz");

console.log(pc.toString());
console.log(server.toString());
