function calcularValor(mes, valor){
    if(mes > 0 && mes < 13){
        let atraso = mes - 1;
        return (valor * ((1 + (5/100)) ** atraso)).toFixed(2);
    }
    return "Mes Inválido";
}

console.log(calcularValor(4, 100))