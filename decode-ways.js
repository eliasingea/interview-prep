/**
 * @param {string} s
 * @return {number}
 */

/**
    Input: s = "12"
    Output: 2
    Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
    Example 2:

    Input: s = "226"
    Output: 3
    Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
    Example 3:

    Input: s = "0"
    Output: 0
    Explanation: There is no character that is mapped to a number starting with 0.
    The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
    Hence, there are no valid ways to decode this since all digits need to be mapped.
    Example 4:

    Input: s = "06"
    Output: 0
    Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").} s 
 
 */
var numDecodings = function(s) {
    if(s[0] === '0') return 0
    let n = s.length
    let dp = new Array(n + 1).fill(0)
    dp[0] = 1
    dp[1] = s.charAt(0) != '0' ? 1 : 0
    
    for (let i = 2; i <= n; i++) {
        let first = parseInt(s.substring(i - 1, i));
        let second = parseInt(s.substring(i - 2, i)); 
        if (first >= 1 && first <= 9) {
            console.log(dp[i])
            dp[i] += dp[i - 1];
        }
        if(second >= 10 && second <= 26) {
            dp[i] += dp[i-2];
        }
    }
    return dp[n]
};