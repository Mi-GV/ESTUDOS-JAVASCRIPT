const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
const numeros = [1, 2, 3, 4, 5];

for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for (let idade = 0; idade < 10; idade++)
{
    console.log(idade)
    console.log("aumentar idade")
}

//while (enquanto)
let contador = 0;

while (contador < 3){
    console.log("continuar")
    contador++
}

let jogadas = 0;
let cara = false;

while(!cara) {
  jogadas++;
  cara = Math.random() < 0.5;
}

console.log(`A moeda caiu cara após ${jogadas} jogadas!`);

let numero;
*/

let numero
rl.question("Digite um número entre 1 e 10:", (numero) => {
    console.log(`Você digitou o número ${numero}.`);
});

/*
do {
  
} while(numero < 1 || numero > 10);
*/
