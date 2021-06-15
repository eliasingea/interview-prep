/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 
 * DFS
 */
var pacificAtlantic = function(matrix) {
    if(matrix.length === 0) return []
    
    let numRow = matrix.length; 
    let numCol = matrix[0].length;
    
    //going to create two queues that represent the atlantic and pacific
    let atlantic = []
    let pacific = []
    
    //both represent the matrix but filled with false
    for (let i = 0; i < numRow; i++) {
        atlantic.push(new Array(numCol).fill(false));
        pacific.push(new Array(numCol).fill(false)); 
    }
    //start with col. Call dfs with i = 0; j = current col, prev = -Inf and pacific
    //call ds with i = maxRow - 1, j = 0; prev = 0 and atlantic
    for (let col = 0; col < numCol; col++) {
        dfs(matrix, 0, col, Number.MIN_SAFE_INTEGER, pacific)
        dfs(matrix, numRow - 1, 0, Number.MIN_SAFE_INTEGER, atlantic)
    }
    
    for (let row = 0; row < numRow; row++) {
        dfs(matrix, row, 0, Number.MIN_SAFE_INTEGER, pacific)
        dfs(matrix, row, numCol - 1, Number.MIN_SAFE_INTEGER, atlantic)
    }
    
    let res = []
    
    for (let i = 0; i < numRow; i++) {
        for (let j = 0; j < numCol; j++) {
            if(atlantic[i][j] && pacific[i][j]) {
                res.push([i, j])
            }
        }
    }
    return res;
};

let dfs = function(matrix, i, j, prev, ocean) {
    if (i<0 ||
       i > matrix.length -1 ||
       j < 0 ||
       j > matrix[i].length - 1
      ) return
    
    
    if (matrix[i][j] < prev) return
    if (ocean[i][j]) return
    ocean[i][j] = true
    
    dfs(matrix, i+1, j, matrix[i][j], ocean)
    dfs(matrix, i-1, j, matrix[i][j], ocean)
    dfs(matrix, i, j+1, matrix[i][j], ocean)
    dfs(matrix, i, j-1, matrix[i][j], ocean)    
}

console.log(pacificAtlantic(
    [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
)); 