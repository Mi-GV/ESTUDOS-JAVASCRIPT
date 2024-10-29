/* Descrição

Neste desafio, você precisa monitorar o estoque de brinquedos de forma eficiente para garantir que sempre haja produtos disponíveis nas lojas. Dessa forma, você vai receber como entrada uma lista de brinquedos e a quantidade disponível em estoque. Seu objetivo é identificar quais brinquedos estão com estoque baixo (menos de 5 unidades) e quais estão com estoque adequado.

Passo a Passo:

    Entrada de Dados: O usuário fornecerá uma lista de brinquedos e suas respectivas quantidades, no formato Nome do Brinquedo:Quantidade. As entradas serão separadas por vírgula e espaço. Por exemplo: "Carrinho:10, Boneca:3, Bloco de Montar:15".

    Processamento dos Dados: Verifique o estoque de cada brinquedo utilizando a estrutura de repetição For. Se a quantidade for menor que 5, o brinquedo está com "Baixo"; caso contrário, está com "Adequado".

    Formatação da Saída: Para cada brinquedo, retorne seu nome seguido por sua situação ("Baixo" ou "Adequado").

Entrada

Uma lista de brinquedos e suas quantidades no formato Nome:Quantidade, separados por vírgula.
Saída

O nome do brinquedo e sua situação de estoque, separados por vírgula.
Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
Entrada 	Saída
Funko Pop:10, Action Figure:3, Lego Star Wars:15 	Funko Pop: Adequado, Action Figure: Baixo, Lego Star Wars: Adequado
Dungeons and Dragons Dice:4, Xbox Controller:8 	

Dungeons and Dragons Dice: Baixo, Xbox Controller: Adequado
Pipa:1, Boneca:12, Funko:3 	Pipa: Baixo, Boneca: Adequado, Funko: Baixo
*/

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//TODO: Crie uma função 'dados.forEach(item =>{' para a implementação da condição de verificação de estoque.

function analisar_dado(item) { 

    let [nome, quantidade] = item.split(":");
    quantidade = parseInt(quantidade);
    let analise 
    //TODO: Realize a verificação utilizando if/else:
    if (quantidade < 5) analise = 'Baixo' 
    else analise = 'Adequado'
    
    return `${nome}: ${analise}` 
}    
    
let dados = gets().split(" ,  ");
let resultado = [];

for (dados of dados) {
    resultado.push(analisar_dado(dados))
}
// Saída formatada corretamente
print(resultado.join(nome + " , " + analise ));