/*let userName = getFirstName("Carlos Almeida Juanito Gargalo")

console.log("Seja bem vindo: " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}*/


let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-")
console.log("Seja bem vindo: " + userName)

userName = getFirstName("Michelle Gonçalves Vianna", " ")
console.log("Seja bem vindo: " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}