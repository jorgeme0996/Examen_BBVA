const cadena = [1,2,0,1,0,1,0,3,0,1];

function moveZeros(cadnea) {
    let cadenaSinCeros = [];
    let contZeros = 0;
    for(let caracter of cadena) {
        if(caracter === 0){
            contZeros ++;
        } else {
            cadenaSinCeros.push(caracter);
        }
    }
    for(let i = 0; i < contZeros; i++){
        cadenaSinCeros.push(0)
    }
    return cadenaSinCeros;
}

console.log(moveZeros(cadena));