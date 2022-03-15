const checkIfPangram = (sentence) => {
    const set = new Set(sentence);
    return set.size === 26;
}

// const sentence = "thequickbrownfoxjumpsoverthelazydog";
const sentence = "leetcode";
console.log(checkIfPangram(sentence));