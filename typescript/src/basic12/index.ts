// let aa: number | string | boolean;

// aa = true

// if (!aa) {
//     aa = false;
// } else {
//     aa = 123
// }

// console.log(aa);

function isString(str: unknown): str is string {
    return typeof str === 'string';
} 

function isNumber(num: unknown): num is number {
    return typeof num === 'number';
}

function formatArray(str: unknown): string[] {
    // 无法分析
    if (isString(str)) {
        // str' is of type 'unknown'
        return str.split('')
    }

    if (isNumber(str)) {
        return str.toString().split('')
    }

    return []
}