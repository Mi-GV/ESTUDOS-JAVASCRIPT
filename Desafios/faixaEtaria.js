/* Descrição

Em uma loja de brinquedos, é importante categorizar os brinquedos com base na faixa etária recomendada para que os clientes possam encontrar facilmente o brinquedo adequado para cada idade. 

O objetivo deste desafio é criar um programa que, ao receber a faixa etária fornecida pelo usuário, categorize o brinquedo em uma das seguintes categorias: "Infantil", "Pre-Adolescente" ou "Adolescente".
Entrada

O programa deverá receber como entrada um número que indica a idade mínima recomendada para o brinquedo. A função gets() deverá ser utilizada para obter a entrada.
Saída

O programa deverá retornar uma mensagem categorizando o brinquedo de acordo com a faixa etária fornecida. As categorias são:

    "Infantil" para idades de 0 a 9 anos.
    "Pre-Adolescente" para idades de 10 a 14 anos.
    "Adolescente" para idades de 15 a 18 anos.

Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
Entrada 	Saída
4 	Infantil
12 	Pre-Adolescente
15 	Adolescente 
*/

// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

// Recebe a faixa etária recomendada


const idade = 18;
let categoria;

// TODO: Verifique a faixa etária e define a categoria correspondente
if (idade > 0 && idade <= 9) {
  categoria = "Infantil";
} else if (idade > 9 && idade <= 14) {
  categoria = "Pre-Adolescente";
} else if (idade > 14 && idade <= 18) {
  categoria = "Adolescente";
}

// Exibe o resultado no console 
console.log(categoria);