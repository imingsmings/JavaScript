/**
 * @param {number[][]} accounts
 * @return {number}
 */
// const maximumWealth = (accounts) => {
//     let maxWealth = 0;
//     for (let account of accounts) {
//         let sum = 0;
//         for (let v of account) {
//             sum += v;
//         }
//         if (sum > maxWealth) {
//             maxWealth = sum;
//         }
//     }
//     return maxWealth;
// }
const maximumWealth = (accounts) => {
    return Math.max(...accounts.map((lists) => {
        return lists.reduce((acc,cur) => {
            return acc + cur;
        }, 0);
    }))
}

const accounts = [[1,5],[7,3],[3,5]];
console.log(maximumWealth(accounts));