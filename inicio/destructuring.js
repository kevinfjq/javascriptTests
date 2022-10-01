const pessoa = {
    nome: "Ana",
    idade: 5,
    endereço: {
        logradouro: "Rua ABC",
        numero: 500
    }
}

const { nome, idade } = pessoa;

console.log(nome, idade);

const {nome: n, idade:i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereço } = pessoa;
console.log(endereço);

const { endereço: {logradouro, numero, cep }} = pessoa;
console.log(logradouro, numero, cep);
