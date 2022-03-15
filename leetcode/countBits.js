// const countBits = (n) => {
//     const regex = /1/g;
//     const bits = [];
//     for (let i = 0; i <= n; i++) {
//         const matches =  i.toString(2).match(regex);
//         if (matches !== null) {
//             bits.push(matches.length);
//         } else {
//             bits.push(0);
//         }
//     }
//     return bits;
// }

const countOnes = (x) => {
    let ones = 0;
    while (x > 0) {
        x &= (x-1);
        ones++;
    }
    return ones;
}
const countBits = (n) => {
    const bits = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
       bits[i] = countOnes(i);
    }
    return bits;
}

const n = 5;
console.log(countBits(n));