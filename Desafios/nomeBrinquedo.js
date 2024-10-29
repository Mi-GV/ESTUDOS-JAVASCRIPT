/*
Descrição

Ao desenvolver uma página web, utilizamos as tags HTML para organizar o conteúdo e o CSS para estilizar os elementos visuais. Um dos elementos HTML mais frequentes é a tag <h1>, que serve para designar o título principal da página. Para ajustar a cor e o tamanho da fonte desse título diretamente no HTML, podemos aplicar o CSS inline, usando o atributo style, como em: <h1 style="color: blue; font-size: 24px;">Título da Página</h1>.
O objetivo deste desafio é criar um programa que, ao receber três entradas (cor, tamanho da fonte e nome do brinquedo), nos retorne e formate o código CSS em uma tag HTML <h1>.
Entrada

A entrada será composta por três strings que representam os nomes dos brinquedos. A função gets() deverá ser utilizada para obter as entradas.
Saída

O programa deverá retornar uma tag <h1> estilizada, contendo o nome do brinquedo. Exemplo: <h1 style="color: red; font-size: 16px;">Carrinho de Controle Remoto</h1>
Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
Entrada 	Saída
red
16px
Carrinho de Controle Remoto 	<h1 style="color: red; font-size: 16px;">Carrinho de Controle Remoto</h1>
pink
20px
Boneca 	<h1 style="color: pink; font-size: 20px;">Boneca</h1>
green
18px
Lego 	<h1 style="color: green; font-size: 18px;">Lego</h1>
*/
// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

const cor = gets();
const tamanhoFonte = gets();
const nomeBrinquedo = gets();

// TODO: Construa a tag <h1> com o estilo CSS, completando com as variáveis representando cada estilização
const resultado = `<h1 style="color: ${cor}; font-size: ${tamanhoFonte};">${nomeBrinquedo}</h1>`;

// Exibindo o resultado no console
print(resultado);