function observarIntervalo(vetor){
    let qtdDentro = 0;
    let qtdFora = 0;
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdDentro++;
        }
        else{
            qtdFora++;
        }
    }
    return `${qtdFora} Fora\n${qtdDentro} Dentro`;
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))
