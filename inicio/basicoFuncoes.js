//Função sem retorno
function lala(a, b){
    console.log(a*b);
}
lala(4, 8);

function mult(a, b=2){
    return a*b;
}
console.log(mult(3));

const imprimirSoma = function(a, b){
    console.log(a+b);
}
//Armazenando função em variável
imprimirSoma(2, 3);

//Armazenando função arrow em variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(3, 4));

//retorno implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(7, 5));