function jurosSimples(capitalInicial, taxa, tempo){
    let valorJuros = capitalInicial * (taxa/100) * tempo;
    return capitalInicial + valorJuros; 
}

function jurosCompostos(capitalInicial, taxa, tempo){
    let valorJurosCompostos = capitalInicial * (1+ taxa)** tempo;
    return valorJurosCompostos.toFixed(2);
}

console.log(`Montante Juros Simples: R$ ${jurosSimples(1000, 2, 6)}`);

console.log(`Montante Juros Compotos: R$ ${jurosCompostos(10000, 0.15, 10)}`);