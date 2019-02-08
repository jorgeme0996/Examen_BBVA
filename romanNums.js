function solution(number){
    let romanNum = '';
    let zero = '0';
    let zeros = '';
    let arrayAux = []
    let arrayOfNum = [...number.toString()];
    arrayOfNum.reverse();

    for(let [i,number] of arrayOfNum.entries()){
      console.log(zeros = zero.repeat(i));
      number = number + zeros;
      arrayAux.push(number);
    }
    console.log(arrayAux.reverse());
    
    return romanNum;
}

console.log(solution(1995));