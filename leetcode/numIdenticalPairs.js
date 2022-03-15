const numIdenticalPairs = (nums) => {
    let count = 0;
    let left = 0;
    let right = 1;
    while (left < nums.length) {
        while (right < nums.length) {
            if (nums[left] === nums[right] && left < right) {
                count++;
            }
            right++;
        }
        left++;
        right = left + 1;
    }
    return count;
}

const nums = [1,1,1,1,1,1];
console.log(numIdenticalPairs(nums));
