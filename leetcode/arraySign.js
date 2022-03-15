const arraySign = (nums) => {
    if (nums.includes(0)) return 0;
    //
    // let count = 0;
    // for (const v of nums) {
    //     if (v < 0) {
    //         count++;
    //     }
    // }
    //
    // return count % 2 === 0 ? 1 : -1;
    const res = nums.reduce((acc, cur) => {
        return acc * cur;
    }, 1)
    // console.log(res);
    return res > 0 ? 1 : -1;
}

const nums = [1,5,0,2,-3];
console.log(arraySign(nums));