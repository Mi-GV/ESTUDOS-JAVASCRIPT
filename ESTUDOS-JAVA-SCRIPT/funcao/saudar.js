function saudar(nome) {
    console.log("Olá, " + nome + "! Como você está?");
  }
  
  saudar("Pedrinho"); // Vai dizer Olá, Pedrinho! Como você está?
  saudar("Mariana"); // Vai dizer Olá, Mariana! Como você está?

  function dizerOla(nome) {
    console.log("Olá, " + nome + "! Como você está?");
  }

  function calcularIdade(nome, anoNascimento) {
    let idade = 2023 - anoNascimento;
    console.log(nome + " tem " + idade + " anos!");
  }
  
  calcularIdade("Pedrinho", 2010); // Vai mostrar Pedrinho tem 13 anos!
  calcularIdade("Mariana", 2008); // Vai mostrar Mariana tem 15 anos!
  