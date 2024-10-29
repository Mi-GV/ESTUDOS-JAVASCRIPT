/*
Descrição

Seu objetivo é ajudar a loja a identificar quais brinquedos estão elegíveis para descontos com base na quantidade comprada. Neste desafio, você vai receber uma lista de brinquedos, suas quantidades compradas e preços unitários. Sua tarefa é verificar quais brinquedos devem ter um desconto aplicado e quais devem manter o preço original. Você receberá um código que já inclui a função e o cálculo de desconto necessários. A função aplicará automaticamente um desconto de 10% para brinquedos cujo estoque comprado for igual ou maior que 5 unidades. Você deve utilizar essa função para processar a lista de brinquedos e formatar a saída conforme o esperado.

Passo a Passo:

    Entrada de Dados: O usuário fornecerá uma lista de brinquedos no formato "Nome: Quantidade, Preço Unitário", onde:

        "Nome" é o nome do brinquedo.

        "Quantidade" é a quantidade comprada desse brinquedo.

        "Preço Unitário" é o preço de uma unidade do brinquedo.

    Os brinquedos são separados por - e cada parte do brinquedo é separada por ,. Por exemplo: "Carrinho: 10, 15.00 - Boneca: 3, 25.00".

    Processamento dos Dados: Utilize a função e o cálculo de desconto fornecidos para determinar o preço final de cada brinquedo. Se a quantidade comprada for 5 ou mais, aplique um desconto de 10% sobre o preço unitário. Caso contrário, mantenha o preço unitário inalterado.

    Formatação da Saída: Para cada brinquedo, retorne uma string no formato "Nome: Preço com Desconto". Se o brinquedo não for elegível para desconto, retorne o preço sem desconto. Separe as informações dos brinquedos por - e espaço.

Entrada

O usuário deverá fornecer uma lista de brinquedos e suas respectivas quantidades e preços no seguinte formato:

Formato:
Nome_do_brinquedo: quantidade, preço_unitário - Nome_do_brinquedo: quantidade, preço_unitário
Saída

A saída será uma lista de brinquedos com seus respectivos preços finais após a aplicação de possíveis descontos, fornecida no seguinte formato:

Formato da saída:
Nome_do_brinquedo: preço_final - Nome_do_brinquedo: preço_final
Exemplos

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
Entrada 	                                                Saída
Carrinho: 10, 15.00 - Boneca: 3, 25.00 	                    Carrinho: 13.50 - Boneca: 25.00

Bola: 7, 10.00 - Quebra-Cabeca: 4, 20.00                    Bola: 9.00 - Quebra-Cabeca: 20.00

Drone: 2, 150.00 - Carro de Controle Remoto: 5, 200.00      Drone: 150.00 - Carro de Controle Remoto: 180.00
    */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


function verificarPromocoes() {
    // TODO: Defina uma constante taxaDesconto com valor 0.10, que representa uma taxa de desconto de 10%:
        
        const taxaDesconto = 0.10;
        const entrada = gets(); 
        const produtos = entrada.split(' - '); 
        const resultado = [];
    
        produtos.forEach(produto => {
            const [nome, quantidadePreco] = produto.split(': '); 
            const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); 
    
            let precoFinal = precoUnitario;
    
            // TODO: Verifique se a quantidade é maior ou igual a 5 e aplicar o desconto se necessário
             if (quantidade >= 5) precoFinal = precoUnitario * (1 - taxaDesconto)
            
            
            resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
        });
    
        print(resultado.join(' - '));


    }
    
    // TODO: Chame a função:
    verificarPromocoes()
    

    



