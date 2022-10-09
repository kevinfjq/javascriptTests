function frutas(fruta){
    switch (fruta){
        case "maçã":
            return "Não vendemos essa fruta aqui";
        case "kiwi":
            return "Estamos com escassez de Kiwi";
        case "melancia":
            return "Aqui está, são 3 reais o quilo";
        default:
            return "Valor inválido";
    }
}


console.log(frutas('maçã'));
console.log(frutas('kiwi'));
console.log(frutas('melancia'));
console.log(frutas('alcafs'));