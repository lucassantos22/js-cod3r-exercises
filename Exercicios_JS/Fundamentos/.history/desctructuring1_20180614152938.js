// Novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        Rua: 1000
    }
}

var { nome, idade } = pessoa;

console.log(nome);