const numeros = [1, 2, 3, 4, 5]

const [, , , a] = numeros;
console.log(a);

const [n1, ,n3, n5, n6=0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

function rand([min = 0, max = 1000]){
    if(min>max){
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([,10]));
console.log(rand([]));