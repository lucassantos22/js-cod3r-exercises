// tagged Templates -> Processa template string dentro de uma função

function tag(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return 'Outra String';
}

const aluno = 'Gui';
const situacao = "Aprovado";
console.log(`${aluno} está ${situacao}.`);
console.log(tag`${aluno} está ${situacao}.`);