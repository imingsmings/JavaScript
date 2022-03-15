const intersection = (nums1, nums2) => {
    const setA = new Set(nums1);
    const setB = new Set(nums2);
    for (let elem of setB) {
        if (!setA.has(elem)) {
            setB.delete(elem);
        }
    }
    return Array.from(setB);
}

const nums1 = [1,2,4,8];
const nums2 = [2,4,6,8,9,8];
console.log(intersection(nums1, nums2));