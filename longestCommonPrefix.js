/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let c = strs.length - 1,
        result = "",
       temp = "";
    if (c < 0) return result;
    if (c === 0 && strs[0].length === 1) return strs[0];
    const string = strs[c];
    for (let i = 0; i < string.length; i++) {
        temp += string[i];
        const index = string.indexOf(temp),
              containsPrefix = val => val.indexOf(temp) === index;
        const prefix = strs.every(containsPrefix);
        if (prefix && temp.length > result.length) {
            result = temp;
            continue;
        }
        break;
    } 
    return result;
};