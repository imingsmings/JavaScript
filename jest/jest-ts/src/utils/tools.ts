/**
 * 判断数组里面的数字是否重复
 * @param arr
 */
function isRepeat(arr: (string | number)[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true
            }
        }
    }
    return false
}

/**
 * 生成 4 位随机数的方法
 */
function randomNum(): number[] {
    let num: number = 0
    let comNum: number[] = []
    while (true) {
        comNum.length = 0
        for (let i = 0; i < 4; i++) {
            num = Math.floor(Math.random() * 10)
            comNum.push(num)
        }
        if (!isRepeat(comNum)) {
            return comNum
        }
    }
}

export { isRepeat, randomNum }
