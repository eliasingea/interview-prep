/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //create an empty matrix 
    let dp = Array(m).fill(null).map(() => Array(n).fill(0));
    //cover all the vertical cells with 1
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1;
    }
    //cover the top horizontal cells with 1
    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            //cells value is cell before to the top and to the left
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    //m - 1 and n - 1 is the last corner cell
    return dp[m - 1][n - 1];
};