const checkIfExist = (arr) => {
    let left = 0;
    let right = 1;
    while (left < arr.length) {
        while (right < arr.length) {
            if (arr[left] * 2 === arr[right] || arr[right] * 2 === arr[left]) {
                return true;
            }
            right++;
        }
        left++;
        right = left + 1;
    }
    return false;
}

// const arr = [10,2,5,3];
// const arr = [3,1,7,11];
const arr = [1,1];
console.log(checkIfExist(arr));