function calcula(num1, operacao, num2){
    switch (operacao){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operação Inválida";
    }
}

console.log(calcula(3, '+', 4));
console.log(calcula(2, '-', 3));
console.log(calcula(2, '*', 3));
console.log(calcula(2, '/', 3));
console.log(calcula(2, 'a', 3));
