function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 5
    };
}

console.log(criarProduto("cadeira", 60));