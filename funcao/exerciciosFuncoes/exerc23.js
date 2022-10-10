function calcularNotaFinal(codigo, n1, n2, n3){
    let notas = [];
    notas.push(n1);
    notas.push(n2);
    notas.push(n3);
    notas.sort((a,b) => a < b ? 1 : -1);
    let media = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10;
    let status = "";
    if(media >= 5){
        status = "Aprovado";
    }
    else {
        status = "Reprovado"
    }
    return `Código do Aluno: ${codigo}
n1: ${n1}
n2: ${n2}
n3: ${n3}
Media: ${media}
Status: ${status}`
}

console.log(calcularNotaFinal(123, 2.8, 6, 3.5));