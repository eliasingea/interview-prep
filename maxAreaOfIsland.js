var maxAreaOfIsland = function(grid) {
    let visited = new Set()
    let dfs = function(row, col, size={count: 0}) {
        visited.add([row, col].join())
        let dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]]; 
        for (let dir of dirs) {
            let rowR = row + dir[0]
            let colC = col + dir[1]
            if(rowR > -1 && rowR < grid.length && colC > -1 && colC < grid[0].length && grid[rowR][colC] === 1 && !visited.has([rowR, colC].join())) {
                size.count++
                dfs(rowR, colC, size)
            }
        }
        return (size.count + 1); 
    }
    
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let str = [i, j].join(); 
            if(grid[i][j] === 1 && !visited.has(str)) {
                res = Math.max(res, dfs(i, j))
            }
        }
    }
    return res; 
};

console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]))