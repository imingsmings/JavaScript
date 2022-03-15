/**
 * @param {number[]} nums
 * @return {number}
 */
// const sumOfUnique = (nums) => {
//     let sum = 0;
//     const map = new Map();
//     for (let v of nums)  {
//         if (map.has(v)) {
//             map.set(v, map.get(v) + 1);
//         } else {
//             map.set(v, 1);
//         }
//     }
//
//     for (let [k,v] of map) {
//         if (v === 1) {
//             sum += k;
//         }
//     }
//
//     return sum;
// }
const sumOfUnique = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {

    }
    return sum;
}
const nums = [1,2,3,2];
console.log(sumOfUnique(nums));
