//Refazer em outra ocasião

function sacarDinheiro(saque){
    let notas100 = 0;
    let notas50 = 0;
    let notas10 = 0;
    let notas5 = 0;
    let notas1 = 0;
    let qtdNotas = calcularNotas(saque);
    while(saque >= qtdNotas){
        switch(qtdNotas){
            case 100:
                saque -= 100;
                notas100++;
                break;
            case 50:
                saque -= 50;
                notas50++;
                break;
            case 10:
                saque -= 10;
                notas10++;
                break;
            case 5:
                saque -= 5;
                notas5++;
                break;
            case 1:
                saque -= 1;
                notas1++;
                break;
        }

        qtdNotas = calcularNotas(saque);

    }

    return montarResultado(notas100, notas50, notas10, notas5, notas1);
}

function calcularNotas(notas){
    if(notas >= 100){
        return 100;
    }
    else if(notas >= 50){
        return 50;
    }
    else if(notas >= 10){
        return 10;
    }
    else if(notas >= 5){
        return 5;
    }
    else if(notas >= 1){
        return 1;
    }
}

function montarResultado(n100, n50, n10, n5, n1){
    let resultado = ""
    if(n100 > 0){
        resultado += `${n100} nota(s) de R$100.\n`;
    }

    if(n50 > 0){
        resultado += `${n50} nota(s) de R$50.\n`;
    }

    if(n10 > 0){
        resultado += `${n10} nota(s) de R$10.\n`;
    }

    if(n5 > 0){
        resultado += `${n5} nota(s) de R$5. `;
    }

    if(n1 > 0){
        resultado += `${n1} nota(s) de R$1. `;
    }
    return resultado;
}

console.log(sacarDinheiro(153));