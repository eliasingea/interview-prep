var orangesRotting = function(grid) {
    let m = grid.length; 
    let n = grid[0].length;

    let minutes = 0;
    let queue = [];
    let fresh = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                fresh += 1
            } else if(grid[i][j] === 2) {
                queue.push([i, j])
            }
        }
    }
    let dirs = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    while (queue.length !== 0 && fresh) {
        let size = queue.length;
        while(size--) {
            let currCell = queue.shift()
            let x = currCell[0]
            let y = currCell[1]
            for(let dir of dirs) {
                let posX = x + dir[0];
                let posY = y + dir[1]; 
                if (posX > -1 && posX < m && posY > -1 
                    && posY < n && grid[posX][posY] === 1) {
                    fresh--;
                    grid[posX][posY] = 2;   
                    queue.push([posX, posY])
                }
            }
        }
        minutes++
    }
    return fresh ? -1 : minutes

};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); 
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); 


/**
 * 2, 1, 1
 * 0, 1, 1
 * 1, 0, 1
 */