obj = {}
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(module.exports);
//this === module.exports