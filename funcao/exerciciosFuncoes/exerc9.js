function aprovar(nota){
    if(nota<38){
        return `Nota: ${nota}
Status: Reprovado`;
    }
    else{
        if(nota % 5 > 2){
            return `Nota: ${(Math.ceil(nota/5))*5}
Status: Aprovado`;
        }
        return `Nota: ${nota}
Status: Aprovado`;
    }
}

console.log(aprovar(100));
console.log(aprovar(30));
console.log(aprovar(38));
console.log(aprovar(88));
console.log(aprovar(61));