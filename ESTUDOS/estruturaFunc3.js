torrar("Pão de Forma","Felipe", 10.90)
torrar("Pão Françês", "Janaina", 22.90)

function torrar(pao, nome, valor){
    console.log("Torrada feita com "+ pao)
    console.log("Pedido de "+ nome)
    console.log("O valor Total é R$ "+ valor)
}

/*torrar("Pão de Forma")
function torrar(pao, nome = "Cliente"){
    console.log("Torrada feita com "+ pao)
    console.log("Pedido de "+ nome)
}*/
// caso não queira colocar o nome. deixar genérico

/*torrar("Pão de Forma", 10.99)
function torrar(pao, valor, nome = "Cliente"){
    console.log("Torrada feita com "+ pao)
    console.log("Pedido de "+ nome)
    console.log("o valor Total é " +valor)
}*/
// caso não queira deixar alguma valor opcional sem citar, coloque no final seu parâmetro