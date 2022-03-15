const moveZeroes = (nums) => {
    const len = nums.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            count++;
            nums.splice(i, 1);
            i--;
        }
    }
    nums.length = len;
    return nums.fill(0, len - count,len);
}

const nums = [1,2,0,0,0,0,1,0,3,12];
console.log(moveZeroes(nums));