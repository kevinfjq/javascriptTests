function conceituarNotas(notas){
    let conceito =[];
    for(let i = 0; i<notas.length; i++){
        if(notas[i] >= 0 && notas[i] < 5){
            conceito.push("D");
        }
        else if(notas[i] < 7){
            conceito.push("C");
        }
        else if(notas[i] < 9){
            conceito.push("B");
        }
        else if( notas[i] >= 9 && notas[i] <= 10){
            conceito.push("A");
        }
        else{
            conceito.push("Nota inválida");
        }
    }
    return `Conceito: ${conceito}`;
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)