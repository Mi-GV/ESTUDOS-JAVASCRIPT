/*let userName = getFirstName("Michelle Gonçalves Vianna")
let segundoNome = getSobrenome("Michelle Gonçalves Vianna")

console.log("Bem vindo: " + userName +" "+ segundoNome)


function getFirstName (name){
    let firstName = name.split(" ")[0]
    return firstName
}
function getSobrenome (name){
    let segundoNome = name.split(" ")[1]
    return segundoNome
}
*/

let userName = getName("Michelle Gonçalves Vianna")
let userSobrenome = getSobrenome ("Michelle Gonçalves Vianna")
let userTerceiroNome = getSobrenome("Michelle Gonçalves Vianna")

console.log("Bem vindo: " + userName + " " +userSobrenome + " " +userTerceiroNome)


function getName (name){
    let nome = name.split(" ")[0]
    return nome
}
function getSobrenome (name){
    let segundoNome = name.split(" ")[1]
    return segundoNome
}
function getSobrenome2 (name){
    let terceiroNome = name.split(" ")[2]
    return terceiroNome
}
