class Pessoa {
    nome;
    idade;

    descrever () {
    console.log(` Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
}

const Pedro = new Pessoa ();
Pedro.nome = 'Pedro'
Pedro.idade = 7;

const Michelle = new Pessoa ();
Michelle.nome = 'Michelle'
Michelle.idade = 33;

const Renato = new Pessoa ();
Renato.nome = 'Renato'
Renato.idade = 34;

Pedro.descrever();
Michelle.descrever();
Renato.descrever();
