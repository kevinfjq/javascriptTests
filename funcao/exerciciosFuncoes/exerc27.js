function calcularCrescimento(altura1, taxa1, altura2, taxa2){
    let anos = 0;
    if(altura1 === altura2){
        if(taxa1 > taxa2){
            return "As crianças tem a mesma altura a criança 1 sera mais alta em 1 ano";
        }
        else if(taxa2 > taxa1){
            return "As crianças tem a mesma altura a criança 2 sera mais alta em 1 ano";
        }
        else{
            return "As crianças tem a mesma altura e a mesma taxa de crescimento";
        }
    }
    else{
        if(altura1 > altura2){
            if(taxa1 >= taxa2){
                return "A criança 2 é mais baixa e não vai crescer mais do que a 1";
            }
            else{
                return `A criança 2 é mais baixa mas ira ultrapassar a criança 1 em ${calcularAnos(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
        else{
            if(taxa2 >= taxa1){
                return "A criança 1 é mais baixa e não vai crescer mais do que a 2";
            }
            else{
                return `A criança 1 é mais baixa mas ira ultrapassar a criança 2 em ${calcularAnos(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}

function calcularAnos(altura1, taxa1, altura2, taxa2){
    let anos = 0;
    if(altura1>altura2){
        while(altura1>altura2){
            altura1 += taxa1;
            altura2 += taxa2;
            anos++;
        }
    }
    else{
        while(altura2>altura1){
            altura1 += taxa1;
            altura2 += taxa2;
            anos++;
        }
    }
    return anos;
}

console.log(calcularCrescimento(150, 2, 130, 4));
