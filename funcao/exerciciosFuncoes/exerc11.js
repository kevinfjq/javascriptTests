function bissexto(ano){
    if(ano <= 0){
        return false;
    }
    if(ano % 400 === 0){
        console.log(`${ano} é bissexto`);
        return true;
    }
    else if(ano % 100 === 0){
        console.log(`${ano} não é bissexto`);
        return false;
    }
    else if(ano % 4 === 0){
        console.log(`${ano} é bissexto`);
        return true;
    }
    else{
        return false;
    }
}

console.log(bissexto(0));
console.log(bissexto(4));
console.log(bissexto(100));
console.log(bissexto(400));
console.log(bissexto(800));
console.log(bissexto(2020));
console.log(bissexto(2021));