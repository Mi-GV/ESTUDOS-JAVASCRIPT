
class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
       return this.peso/ (this.altura * this.altura);
    }
}
const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());

const michelle = new Pessoa('Michelle', 33, 1.55);
console.log(michelle);
console.log(michelle.calcularImc());