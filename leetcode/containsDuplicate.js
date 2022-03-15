// const containsDuplicate = (nums) => {
//     const map = new Map();
//     for (let value of nums) {
//         if (map.has(value)) {
//             return true;
//         } else {
//             map.set(value, 1);
//         }
//     }
//     return false;
// }

// const nums = [1,2,3,1,2,3,4];
// const scores = [99,98,100,88];

// console.log(containsDuplicate(nums)); // true
// console.log(containsDuplicate(scores)); // false

// const nums = [2, 3, 1, 0, 2, 5, 3];

// const findRepeatNumber = (nums) => {
//     // const set = new Set();
//     const map = new Map();
//     for (let value of nums) {
//         if (map.has(value)) {
//             return value; 
//         } else {
//             map.set(value,1);
//         }
//     }
// }

// console.log(findRepeatNumber(nums));

/*
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if (nums.length === 0) return nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

const nums = [1,1,2];
console.log(removeDuplicates(nums));
console.log(nums);
