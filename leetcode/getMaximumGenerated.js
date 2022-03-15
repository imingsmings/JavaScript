/*
给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：
nums[0] = 0
nums[1] = 1
当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
返回生成数组 nums 中的 最大 值。
* */
const getMaximumGenerated = (n) => {
  const nums = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      nums[i] = i;
    }
    if (i > 0 && i * 2 >= 2 && i * 2 <= n) {
      nums[2 * i] = nums[i]
    }
    if (i > 0 && (i * 2 + 1) >= 2 && (i * 2 + 1) <= n) {
      nums[2 * i + 1] = nums[i] + nums[i + 1]
    }
  }
  console.log(nums);
  return Math.max(...nums);
}

const n = 10;
console.log(getMaximumGenerated(n));