const firstUniqChar = (s) => {
    const map = new Map();
    for (const v of s) {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    }
    for (const key of map.keys()) {
        if (map.get(key) === 1) {
            return s.indexOf(key);
        }
    }
    return -1;
}

const s = 'aaaaabcdebdef';
console.log(firstUniqChar(s)); // 0