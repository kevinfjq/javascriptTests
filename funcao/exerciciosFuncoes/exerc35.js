let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function adicionaVetor(pilha, adicionar){
    for(let i = 0; i < adicionar.length; i++){
        pilha.push(adicionar[i]);
    }
    return pilha;
}

console.log(adicionaVetor(vetorPilha, vetorAdiciona))
