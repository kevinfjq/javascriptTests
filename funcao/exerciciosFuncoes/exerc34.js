function verificacaoDeString(string1, string2){
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    let igual = true;
    for(let i = 0; i< string1.length; i++){
        for(let j = 0; j < string2.length; j++){
            if(string1[i] == string2[j]){
                igual = true;
                break;
            }
            else{
                igual = false
            }
        }
        if(!igual){
            return igual;
        }
    }
    for(let i = 0 ; i < string2.length; i++){
        for(let j = 0; j < string1.length; j++){
            if(string2[i] == string1[j]){
                igual = true;
                break;
            }
            else{
                igual = false;
            }
        }
        if(!igual){
            return igual;
        }
    }
    return igual;
}

console.log(verificacaoDeString('abcd', 'dcba'))
