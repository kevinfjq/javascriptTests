function maiorMenor(vetor){
    let menor = vetor[0]
    let maior = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i];
        }
        else if(vetor[i] < menor){
            menor = vetor[i];
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))
