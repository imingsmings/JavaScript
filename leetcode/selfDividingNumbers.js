// const selfDividingNumbers = (left, right) => {
//     const res = [];
//     while (left <= right) {
//         if (left < 10) {
//             res.push(left);
//         } else {
//             if (left % 10 !== 0) {
//                 const tmp = [];
//                 let value = left;
//                 while (value > 10) {
//                     tmp.push(value % 10);
//                     value = Math.floor(value / 10);
//                 }
//                 tmp.push(value);
//                 let count = 0;
//                 for (let v of tmp) {
//                     if (left % v === 0) {
//                         count++;
//                     }
//                 }
//                 if (count === tmp.length) {
//                     res.push(left);
//                 }
//             }
//         }
//         left++;
//     }
//     return res;
// }
const selfDividingNumbers = (left, right) => {
    let res=[];
    for(let i=left;i<=right;i++){
        i.toString().split('').every(num=>i%parseInt(num)===0)&&res.push(i)
    }
    return res;
}
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
console.log(selfDividingNumbers(1, 22));