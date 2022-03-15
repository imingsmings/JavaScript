/**
 * @param {string[]} strs
 * @return {string}
 */
/*
输入：strs = ["flower","flow","flight"]
输出："fl"
 */
const longestCommonPrefix = function (strs) {
  let res = strs[0] ? strs[0] : "";
  for (let i = 1; i < strs.length; i++) {
    let regex = new RegExp("^" + res);
    while (!regex.test(strs[i]) && res.length) {
      res = res.slice(0, res.length - 1);
      regex = new RegExp("^" + res);
    }
  }
  return res;
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
