
class Carro{
    marca;
    cor;
    gastoMedioPorkm;

    constructor(marca, cor, gastoMedioPorkm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorkm = gastoMedioPorkm;
    }

    calcularGastoDePercurso(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorkm * precoCombustivel;
    }
}
const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70,5));

const palio = new Carro('Palio', 'Preto', 1 / 10);
console.log(palio.calcularGastoDePercurso(70,5));