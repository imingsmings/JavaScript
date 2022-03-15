/**
 * @param {string} s
 * @return {boolean}
 */

 const isValid = (s) => {
  if (s.length % 2 === 1) return false;

   const map = new Map(
    [ [')','('],
      [']','['],
      ['}','{']
    ]);

    const stack = [];
    for (let ch of s) {
      if (map.has(ch)) {
        if (stack.pop() !== map.get(ch)) {
          return false;
        }
      } else {
        stack.push(ch);
      }
    }

    return stack.length === 0 ? true : false;
};
const s = "(([)])";
console.log(isValidBracket(s));
