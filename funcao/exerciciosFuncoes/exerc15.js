function escolherCarro(modelo){
    switch (modelo){
        case "hatch":
            console.log("Compra efetuada com sucesso");
            break;
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            console.log("Tem certeza que não prefere esse modelo?");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
            break;
    }
}


escolherCarro('hatch');
escolherCarro('motocicleta');
escolherCarro('sedan');
escolherCarro('caminhonete');
escolherCarro('jetski');