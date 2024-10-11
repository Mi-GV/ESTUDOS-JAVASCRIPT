const numero = 3;
const numeroDivisivelPor2 = (numero % 2) === 0;

if(numero === 0){
    console.log('O número é inválido')
}
else if (numeroDivisivelPor2){
    console.log('Sim');
}else{
    console.log('Não');
}

const numero2 = 4;
const numeroDivisivelPor4 = (numero2 % 4) === 0;

if(numero2 === 0){
    console.log('O número é inválido')

}else if(numero2 === 4){
    console.log('O número é inválido')

}else if (numeroDivisivelPor4){
    console.log('Sim');

}else{
    console.log('Não');
}

