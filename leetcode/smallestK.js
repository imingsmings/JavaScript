const smallestK = (arr, k) => {
    if (k === 0 || arr.length === 0) return [];
    if (arr.length === k)  return arr;
    return arr.sort((a ,b) => a - b).slice(0,k);
}

const arr = [];
const k = 1;
console.log(smallestK(arr, k));