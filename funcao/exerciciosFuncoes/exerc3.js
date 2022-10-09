function potencia(base, expoente){
    let temp = base
    for(let i = 1; i < expoente; i++){
        temp *= base;
    }
    return temp;
}

console.log(potencia(1.15, 10));