const entre = function(nota){
    if(nota>=7 && nota<=10){
        console.log(`Aprovado com ${nota}`);
    }else if(nota<7 && nota>=0){
        console.log(`Reprovado com ${nota}`);
    }else if(typeof nota == 'string'){
        console.log(`Apenas números podem ser inseridos no campo "nota".`);
    }else{
        console.log(`A nota ${nota} não é válida, insira uma nota de 0 a 10.`);
    }
}

imprimirResultado(8.5);