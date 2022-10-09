function calcularReajuste(plano, salario){
    switch (plano){
        case "A":
            return salario + (salario*0.10);
        case "B":
            return salario + (salario * 0.15);
        case "C":
            return salario + (salario * 0.20);
        default:
            return "Plano inválido";
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));