function calcularVenda(codigo, quantidade){
    switch(codigo){
        case 100:
            return `${quantidade} Cachorro Quente: R$${(3 * quantidade).toFixed(2)}`;
        case 200:
            return `${quantidade} Hambúrguer Simples: R$${(4 * quantidade).toFixed(2)}`;
        case 300:
            return `${quantidade} Cheeseburguer: R$${(5.50 * quantidade).toFixed(2)}`;
        case 400:
            return `${quantidade} Bauru: R$${(7.50 * quantidade).toFixed(2)}`;
        case 500:
            return `${quantidade} Refrigerante: R$${(3.50 * quantidade).toFixed(2)}`;
        case 600:
            return `${quantidade} Suco: R$${(2.80 * quantidade).toFixed(2)}`;
        default:
            return "Produto não existe";
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
