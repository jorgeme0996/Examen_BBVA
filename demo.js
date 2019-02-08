function electionWinner(votes) {
    let winner = '';
    let repeatNames = [];
    let repeatNames2 = [];
    let array = [];
    votes.sort();
    for (let [index,name] of votes.entries()) {
        if (name === votes[index + 1]) {
            repeatNames.push(name);
        }
    }
    console.log(repeatNames);

    if(repeatNames.length > 2){
        for (let [index,name] of repeatNames.entries()) {
            if (name === repeatNames[index + 1]) {
                repeatNames2.push(name);
            }
        }
        console.log(repeatNames2);
        winner = repeatNames2[repeatNames2.length-1];
    } else {
        winner = repeatNames[repeatNames.length-1]
    }

    return winner;
}

console.log(electionWinner(['Alex', 'Alex', 'Jorge', 'Mary', 'Mary']));