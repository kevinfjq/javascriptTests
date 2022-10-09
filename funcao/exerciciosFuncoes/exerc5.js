function arrumarNumero(numero){
    texto = numero.toFixed(2).toString();
    texto = texto.replace(".", ",");
    return `R$ ${texto}`;
}

console.log(arrumarNumero(0.3000000000000004));