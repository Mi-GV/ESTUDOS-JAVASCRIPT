/*
Descrição

Ao construir uma página web, usamos tags HTML para organizar o conteúdo de forma estruturada. As tags <ul> e <li> são utilizadas para criar listas não ordenadas. A tag <ul> define o contêiner da lista, enquanto a tag <li> é utilizada para representar cada item dentro dessa lista. Esse formato é ideal para agrupar informações de maneira clara e organizada.

Este desafio consiste em criar um programa em JavaScript que recebe três strings como entrada do usuário, cada uma contendo o nome de um brinquedo. O programa deverá exibir essas strings como uma lista HTML formatada, usando a tag ul para a lista e a tag li para cada item da lista.
Entrada

A entrada será composta por três strings que representam os nomes dos brinquedos. A função gets() deverá ser utilizada para obter as entradas.
Saída

A saída deverá ser uma lista HTML com os brinquedos. Use a tag <ul> para a lista e a tag <li> para cada brinquedo.
Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
Entrada 	    Saída

Boneca          <ul>
                <li>Boneca</li>
                <li>Carrinho</li>
                <li>Lego</li>
                </ul>

Carrinho        <ul>
                <li>Bola</li>
                <li>Lego</li>
                <li>Pipa</li>
                </ul>
                
Lego 	        <ul>
Bola            <li>Dinossauro</li>
Lego            <li>Patinete</li>
Pipa 	        <li>Ursinho</li>
Dinossauro      </ul>
Patinete
Ursinho 	 
*/

// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

// Capturando os nomes dos brinquedos
let brinquedo1 = gets();
let brinquedo2 = gets();
let brinquedo3 = gets();

// Imprimindo a lista
print("<ul>");
print(`<li>${brinquedo1}</li>`);
// TODO: Preencha o código abaixo com as variáveis que representam os nomes dos brinquedos
print(`<li>${brinquedo2}</li>`);
print(`<li>${brinquedo3}</li>`);
print("</ul>");