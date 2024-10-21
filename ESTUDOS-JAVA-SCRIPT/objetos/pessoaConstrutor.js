
class pessoaConstrutor {
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }
    descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const Pedro = new pessoaConstrutor('Pedro',7);
const Michelle = new pessoaConstrutor('Michelle',33);
const Renato = new pessoaConstrutor('Renato',34);

Pedro.descrever();
Michelle.descrever();
Renato.descrever();

console.log(Pedro);
console.log(Michelle);
console.log(Renato);