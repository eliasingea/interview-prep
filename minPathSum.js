var minPathSum = function(grid) {
    let m = grid.length; 
    let n = grid[0].length;
    let dp = new Array(m).fill(new Array(n).fill(0))
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) dp[i][j] = grid[0][0]
            else if(i === 0) dp[i][j] = grid[i][j] + dp[i][j - 1]
            else if(j === 0) dp[i][j] = grid[i][j] + dp[i - 1][j]
            else dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
        }  
     }
     return dp[m - 1][n - 1]
};
var minPathSumDFS = function(grid) {
    let m = grid.length; 
    let n = grid[0].length;
    let seen = new Set()
    
    let dfs = function(row, col) {
        rowCol = [row, col].join()
        if(row === m - 1 && col === n - 1) {
            return grid[row][col];  
        }
        if(row > -1 && row < grid.length && col > -1 && col < grid[0].length 
            && !seen.has([row, col].join())) {
            seen.add(rowCol)
            let right = dfs(row, col + 1); 
            let down = dfs(row + 1, col); 
            return Math.min(down, right) + grid[row][col];
        } else {
            return Number.MAX_SAFE_INTEGER
        }
    }
    return dfs(0, 0)
}


grid = [[1,3,1],[1,5,1],[4,2,1]]
res = minPathSumDFS(grid);
console.log(res)

// 1, 3, 1
// 1, 5, 1
// 4, 2, 1

// i == 0 && j == 0 dp[i][j] = 1
// i == 0 dp[i][j] = grid[i][j] + dp[i][j-1]
// i == 0 and j == 1 becomes 3 + 1 = 4
// if j == 0 dp[i][j] = grid[i][j] + dp[i - 1][j]
// essentially looking up


// 1, 4, 0
// 2, 0, 0
// 0, 0, 0

