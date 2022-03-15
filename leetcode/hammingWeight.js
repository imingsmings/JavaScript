// const hammingWeight = (n) => {
//     n = n.toString(2);
//     let count = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === '1') {
//             count++;
//         }
//     }
//     return count;
// }

const hammingWeight = (n) => {
    const matches = n.toString(2).match(/1/g);
    return matches ? matches.length : 0;
}

const n = 0b00000000000000000000000000000000;
console.log(hammingWeight(n));