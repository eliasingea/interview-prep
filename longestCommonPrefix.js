var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    let testStr = strs.shift()
    console.log(testStr)
    let returnVal = ""
    var runDP = function(returnVal, testStr, strs) {
        if (testStr.length === 0) return ""
        if (returnVal !== "") return returnVal
        for (let str of strs) {
            if (str.indexOf(testStr) == 0) {
                returnVal = testStr 
            } else {
                testStr = runDP(returnVal, testStr.slice(0, -1), strs)
            }
        }
        return returnVal
    };
    
    console.log(runDP(returnVal, testStr, strs))
};

console.log(longestCommonPrefix(["flower","flow","flight"]))