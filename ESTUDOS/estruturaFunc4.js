function dizerOla(nome) {
    console.log("Olá, " + nome + "! Como você está?");
  }
    dizerOla("Pedrinho"); // Vai dizer Olá, Pedrinho! Como você está?
    dizerOla("Mariana"); // Vai dizer Olá, Mariana! Como você está?

function calcularIdade(nome, anoNascimento) {
    let idade = 2023 - anoNascimento;
    console.log(nome + " tem " + idade + " anos!");
  }
      
    calcularIdade("Pedrinho", 2010); // Vai mostrar Pedrinho tem 13 anos!
    calcularIdade("Mariana", 2008); // Vai mostrar Mariana tem 15 anos!

function calcularDiferenca(nome1, nome2, ano1, ano2){
    let diferenca = ano1 - ano2;
    console.log("A diferença de Idades entre "+nome1 + " e " +nome2 + " é "  +diferenca );
}
    calcularDiferenca("Pedrinho", "Mariana",2010, 2008);
  

    
