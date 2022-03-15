
const fizzBuzz = (n) => {
    const res = [];
    let tmp = 1;
    while (tmp <= n) {
        if (tmp % 3 === 0 && tmp % 5 !== 0) {
            res.push('Fizz')
        } else if (tmp % 3 !== 0 && tmp % 5 === 0) {
            res.push('Buzz');
        } else if (tmp % 3 === 0 && tmp % 5 === 0) {
            res.push('FizzBuzz');
        } else {
            res.push(tmp + '');
        }
        tmp++;
    }
    return res;
}

console.log(fizzBuzz(100));