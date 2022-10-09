function recordes(lista){
    let separacaoResultados = lista.split(", ");
    let record;
    let bateu = 0;
    let pior;
    let posPior;
    let resultado = [];
    for(let i = 0; i< separacaoResultados.length;i++){
        separacaoResultados[i] = parseInt(separacaoResultados[i], 10);
    }
    record = separacaoResultados[0];
    pior = separacaoResultados[0];
    for(let i = 1;i<separacaoResultados.length; i++){
        if(separacaoResultados[i] > record){
            record = separacaoResultados[i];
            bateu++;
        }
        else if(separacaoResultados[i] < pior){
            posPior = i + 1;
            pior = separacaoResultados[i];
        }
    }
    resultado.push(bateu);
    resultado.push(posPior);
    return resultado;
}



console.log(recordes("30, 40, 20, 4, 51, 25, 42, 38, 56, 0"))