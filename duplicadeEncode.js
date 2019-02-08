const word = 'Success'; //recede Success

function duplicateEncode(word){
    word = word.toLowerCase();
    let newString = '';
    const arrayOfWord = [...word].sort();
    let repeatWords = [];

    for(let [i,letter] of arrayOfWord.entries()) {
        console.log(word[i+1]);
        if(letter === arrayOfWord[i+1]) {
            repeatWords.push(letter);
        }
    }
    console.log(repeatWords);
    repeatWords = new Set(repeatWords);
    console.log(repeatWords);

    for(let letter of word){
        if(repeatWords.has(letter)) {
            letter = ')';
            newString += letter;
        } else {
            letter = '(';
            newString += letter;
        }
    }
    return newString;
}

console.log(duplicateEncode(word));