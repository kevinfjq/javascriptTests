function trocaValores(vetorA, vetorB){
    console.log(`VetorA: ${vetorA}`);
    console.log(`VetorB: ${vetorB}\n`);
    for(let i=0; i< vetorA.length; i++){
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]];
    }
    console.log(`VetorA: ${vetorA}`);
    console.log(`VetorB: ${vetorB}`);
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)