
function escrevaMeuNome(nome){
    console.log('Meu nome é ' + nome);
}
escrevaMeuNome('Michelle');
escrevaMeuNome('Pedro');

function verificarIdade(idade){
    if (idade >= 18){
        console.log('Maior');
    } else {
        console.log('Menor');
    }
}

verificarIdade(33);

/*
function escrevaMeuNome(nome){
    return ('Meu nome é ' + nome);
}


function verificarIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome('Michelle) + 'é Maior');
    } else {
        console.log('Menor');
    }
}

verificarIdade(33);
*/