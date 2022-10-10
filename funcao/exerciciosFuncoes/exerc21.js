function calcularPreco(idade){
    let taxa;
    if(idade < 0){
        return "Idade Inválida";
    }
    else if(idade < 10){
        taxa = 80;
    }
    else if(idade < 30){
        taxa = 50;
    }
    else if(idade < 60){
        taxa = 95;
    }
    else if(idade >= 60){
        taxa = 130;
    }
    return 100 + taxa;
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));