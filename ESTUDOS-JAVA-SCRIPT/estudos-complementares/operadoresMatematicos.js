
var produto1 = 50
var produto2 = 30

console.log(" --- Adição ---")
var somaProdutos = produto1 + produto2
console.log("       " + somaProdutos)

console.log("--- Subtração ---")
var subtracaoProdutos = produto1 - produto2
console.log("       " + subtracaoProdutos)

console.log("--- Divisão ---")
var divisaoProdutos = produto1 / produto2
console.log("       " + divisaoProdutos)

console.log("--- Multiplicação ---")
var multiplicacaoProdutos = produto1 * produto2
console.log("       " + multiplicacaoProdutos)

console.log("--- Desconto ---")
var produto = 100
var desconto = produto - 10
console.log(" O Produto custava " + produto + ", com o desconto ficou " + desconto)

console.log("--- Juros ---")
var jurosAplicado = produto * 2
console.log(" O Produto custava " + produto + ", com o juros ficou " + jurosAplicado)

console.log("--- Parcelas ---")
var valorProduto = 100
var parcelas = 10
var valorParcela = valorProduto / parcelas
var parcelasPagas = 3
var parcelasFinais = parcelas - parcelasPagas
var valorPago = parcelasFinais * valorParcela
console.log("Ainda Faltam " + parcelasFinais + " parcelas")
console.log("Valor Pago " + valorPago)


console.log("--- Parcelas com Entrada---")
var parcelasCliente = 3
var entradaCliente = ((parcelas % parcelasCliente) * valorParcela)
var valorDividido = valorProduto - entradaCliente 
console.log("Valor de entrada do Cliente foi " + entradaCliente + " e dividiu " + valorDividido + " em " + parcelasCliente + " parcelas")

console.log("--- Incrementar valor ---")
var qproduto1 = 20
qproduto1 ++
var qproduto2 = 30
qproduto2 ++

console.log(qproduto1)
console.log(qproduto2)

console.log("--- Decrementar valor ---")
qproduto1 --
qproduto2 --

console.log(qproduto1)
console.log(qproduto2)

console.log("--- Atribuir valor ---")
produto1 += 5
produto2 += 6

console.log(produto1)
console.log(produto2)

console.log("--- Comparação ---")
var comparar = produto1 === produto2
console.log(comparar)
console.log(parcelas != parcelasPagas)

