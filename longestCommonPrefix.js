var longestCommonPrefix = function(strs) {
    let count = strs.length - 1,
        result = "",
       temp = "";
    
    if (count < 0) return result;
    if (count === 0 && strs[0].length === 1) return strs[0];
    const string = strs[count];
    for (let i = 0; i < string.length; i++) {
        temp += string[i];
        const location = string.indexOf(temp),
              containsPrefix = (currentValue) => {
            const hasPrefix = currentValue.indexOf(temp);
            if (hasPrefix === location) return true;
                return false;
        };
        const prefix = strs.every(containsPrefix);
        if (prefix && temp.length <= string.length && temp.length > result.length) {
            result = temp;
            continue;     
        }
        break;

    } 
    return result;
};