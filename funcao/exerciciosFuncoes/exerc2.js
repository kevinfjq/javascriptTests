function triangulo (a, b, c){
    if(a + b < c || b + c < a || a + c < b){
        return "Não é possivel formar um triangulo com esses valores";
    }
    if(a === b && b === c){
        return "Triangulo Equilatero";
    }
    else if(a !== b && a !== c && c !== b){
        return "Triangulo Escaleno";
    }
    else{
        return "Triangulo Isosceles";
    }
}

console.log(triangulo(3, 3 ,3));