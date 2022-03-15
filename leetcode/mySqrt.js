/*
计算并返回 x 的平方根，其中 x 是非负整数。
由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
* */
const mySqrt = (x) => {
    return Math.floor(Math.sqrt(x));
}

const x = 10;
console.log(mySqrt(x));