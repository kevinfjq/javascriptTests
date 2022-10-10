let vetor = [1, 2, 3, 4, 5, 7];


function multiplicaVetor(vetor, num){
    for(let i = 0; i< vetor.length; i++){
        vetor[i] = vetor[i] * num;
    }
    return vetor;
}

function multiplicaVetor5(vetor, num){
    for(let i = 0; i< vetor.length; i++){
        if(vetor[i] > 5){
            vetor[i] = vetor[i] * num;
        }
    }
    return vetor;
}
console.log(multiplicaVetor5(vetor, 3))


console.log(multiplicaVetor(vetor, 3))


