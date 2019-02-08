function returnRepeatNum(numbers){
    numbers.sort();
    let newArray = [];
    for(let [index, number] of numbers.entries()){
        if(number === numbers[index+1]){
            newArray.push(number);
        }
    }
    const newNewArray = new Set(newArray)
    return newNewArray.size;
}

console.log(returnRepeatNum([10,1,2,3,4,5-6,7-6,9,10]));