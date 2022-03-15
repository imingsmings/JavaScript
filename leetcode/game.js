const game = (guess, answer) => {
    let index = 0;
    let count = 0 ;
    while (index < 3) {
        if (guess[index] === answer[index]) {
            // guess[index] = 1;
            count++;
        }
        index++;
    }
    // return Math.sum(...guess);
    console.log(guess);
}

// const guess = [1,2,3];
const guess = [2,2,3];
const answer = [3,2,1];
console.log(game(guess, answer));