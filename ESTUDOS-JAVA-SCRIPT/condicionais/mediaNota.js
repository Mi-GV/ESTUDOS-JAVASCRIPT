/*
Faça um algoritimo que dado 3 notas tiradas por um aluno em um semestre de faculdade.
Calcule e imprima a sua média e sua classificação conforme a tabela abaixo.

Média = (nota1 + nota2 + nota3)/3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 5;
const nota2 = 7;
const nota3 = 10;
const media = (nota1 + nota2 + nota3)/ 3;
console.log(media);

if (media < 5){
    console.log('Reprovação');
}else if (media >= 5 && media <= 7){
    console.log('Recuperação');
}else{
    console.log('Passou de semestre');
}

