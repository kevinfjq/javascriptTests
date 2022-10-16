//Código não executavel

//Procedural
/*processamento(valor1, valor2, valor3);*/

//OO
/*objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        ...
    }
}*/

//Principios Importante
//1. Abstração
//2. Encapsulamento
//3. Herança
//4. Polimorfismo

const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 145
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        // 
    }
}

carro.proprietario.endereco.numero = 1000;
console.log(carro);