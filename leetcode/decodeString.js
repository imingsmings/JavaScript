const decodeString = (s) => {
    let res = '';
    const matches = s.match(/\d+\[\S+\]/g);
    for (let value of matches) {
        const start = value.indexOf('[');
        const end = value.lastIndexOf(']');
        value = value.slice(start+1,end);
        // console.log(value);

    }
    // return s;
}

const s = '3[a2[c]]';
console.log(decodeString(s)); // aaabcbc