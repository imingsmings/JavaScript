const isUgly = (n) => {
    if (n <= 0) return false;
    if (n === 1) return true;
    /*
    思路:
    先判断一个数是否被2整除
        如果整除,继续判断是否被2整除
        如果不整除,判断是否被3整除
            如果整除,继续判断是否被3整除
            如果不整除,判断是否被5整除
                ....
    * */
    while (n !== 1) {
        if (n % 2 === 0) {
            n /=  2;
        } else if (n % 3 === 0) {
            n /= 3;
        } else if (n % 5 === 0) {
            n /= 5;
        } else {
            return false;
        }
    }

    return true;
}

/*
const isUgly = (n) => {
    if (n <= 0) {
        return false;
    }
    const factors = [2, 3, 5];
    for (const factor of factors) {
        while (n % factor === 0) {
            n /= factor;
        }
    }
}
* */
// const n = 2;
// const n = 8;
// const n = 14;
// const n = 9;
// const n = -20;
// const n = 1;
// const n = 91;
const n = 2**31 - 1;
console.log(n,isUgly(n));