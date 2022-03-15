const findComplement = (num) => {
    num = num.toString(2);
    let res = '';
    for (let i = 0; i < num.length; i++) {
        res += num[i]^1;
    }
    return parseInt(res,2);
}

const num = 5;
console.log(findComplement(num));