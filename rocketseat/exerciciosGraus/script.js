function celsiusToFarid(degree){
    const  celsiusExists = degree.toUpperCase().includes('C');
    const faridExists = degree.toUpperCase().includes('F');

    if(!celsiusExists && !faridExists){
        throw new Error('Grau não identificado');
    }
    
    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.match(/\d+/g));
    let formula = (farid) => (farid - 32) * 5/9;
    let degreeSign = "C";

    if(celsiusExists){
        updatedDegree = Number(degree.match(/\d+/g));
        formula = (celsius) => celsius * (9/5) + 32;
        degreeSign = "F"
    }

    return formula(updatedDegree) + degreeSign;
}

try {
    console.log(celsiusToFarid("10C"));
    console.log(celsiusToFarid("50F"));
    celsiusToFarid("50Z");
} catch(error) {
    console.log(error.message);
}