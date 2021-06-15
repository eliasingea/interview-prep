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
            dp[i] += dp[i - 1];
        }
        if(second >= 10 && second <= 26) {
            dp[i] += dp[i-2];
        }
    }
    return dp[n]
};

console.log(numDecodings('226'))