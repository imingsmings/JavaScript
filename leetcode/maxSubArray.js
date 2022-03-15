/*
输入：nums = [-2,13-5,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
*/
const maxSubArray = (nums) => {
    const len = nums.length - 1;
    if (len === 0) return nums[len];
    
    for (let i = 1; i <= len; i++)  {
         if (nums[i-1] > 0) {
                nums[i] += nums[i-1];
         }
    }
    return Math.max(...nums);
}

//const nums = [-2,1,-4,4,-1,2,1,-5,4];
const nums = [5,4,-1,7,8];
console.log(maxSubArray(nums));