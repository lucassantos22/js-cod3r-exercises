const saudacao = 'Opa'; //Contexto léxico 1

function exec(){
    const saudacao = 'Faaala'; //Contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor