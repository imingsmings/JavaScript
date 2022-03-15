/**
 * @param {number[]} coins
 * @return {number}
 */
const minCount = (coins) => {
    let count = 0;
    for (let v of coins) {
        while (v > 2) {
            if ((v - 2) >= 1) {
                count++;
            }
            v -= 2;
        }
        count++;
    }
    return count;
}

// const coins = [4,2,1];
const coins = [2,3,10];
console.log(minCount(coins));