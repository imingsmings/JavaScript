// const isThree = (n) => {
//     let count = 0;
//     let value = n;
//     while (value > 0) {
//         if (n % value === 0) {
//             count++;
//         }
//         value--;
//     }
//     return count === 3;
// }

const isThree = (n) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count === 3;
}

console.log(isThree(1)); // false
console.log(isThree(4)); // true
console.log(isThree(8)); // false
console.log(isThree(9)); // true
console.log(isThree(11)); // false
console.log(isThree(100)); // false