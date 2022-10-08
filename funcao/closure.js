//Closure é o escopo criado quando uma função é declarada

//Contexto lexico em ação

const x = "Global";

function fora(){
    const x = "Local";
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());