/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     const map = new Map();
    // const len = nums.length - 1; // 4
//     for(let i = 0; i <= len; i++) {
//         if (map.has(nums[i])) {
//             map.set(nums[i],map.get(nums[i])+1);
//         } else {
//             map.set(nums[i],1);
//         }
//     }
    
//     for (let [key,value] of map.entries()) {
//         if(value === 1) {
//             return key;
//         }
//     }
    // [2,2,1,1,3,3,4,6,4,6,0]
    // for (let i = 0; i <= nums.length - 1; i++) {
    //     const cur = nums[i]; 
    //     for (let j = i + 1; j <= nums.length - 1; j++) { 
    //         if (cur === nums[j]) {
    //             nums.splice(i,1);
    //             nums.splice(j-1,1);
    //             i = -1;
    //             j = i + 1;
    //             break;
    //         }
    //     }
    // }
    // return nums[0];
    // console.log(nums);
    
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};