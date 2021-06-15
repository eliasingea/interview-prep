var numIslands = function(grid) {
    var total = 0; 
    
    let dfs = function(x, y) {
        //List of all possible directions
        let dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]]; 

        //mark current stop
        grid[x][y] = '0'; 

        dirs.forEach(function(dir) {
            let posX = x + dir[0]; 
            let posY = y + dir[1]; 

            if(posX > -1 && posX < grid.length && posY > -1 
                && posY < grid[0].length && grid[posX][posY] === '1') {
                dfs(posX, posY)
            }
        });
    }
    
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0, m = grid[0].length; j < m; j++) {
            if(grid[i][j] === '1') {
                total++; 
                dfs(i, j)
            }
        }
    }
    return total; 
};

var grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
var islands = numIslands(grid);
console.log(islands);