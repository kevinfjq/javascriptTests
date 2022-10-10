function  pA(n, a1, r){
    let resultado = [a1];
    let soma = a1;
    for(let i = 1; i < n; i++){
        resultado.push(resultado[i-1]+r);
        soma += resultado[i];
    }
    return `${resultado}\nSoma: ${soma}`;
}

function pG(n, a1, r){
    let resultado = [a1];
    let soma = a1;
    for(let i = 1; i < n; i++){
        resultado.push(resultado[i-1] * r);
        soma += resultado[i];
    }
    return `${resultado}\nSoma: ${soma}`;
}

console.log(pA(10, 10, 15));

console.log('----------------');

console.log(pG(10, 5, 3));