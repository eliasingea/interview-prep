/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 let getNeighbors = function(board, row, col) {
    let count = 0; 
    let dirs = [[0, -1], [0, 1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    for(let dir of dirs) {
        let rowR = row + dir[0]
        let colC = col + dir[1]
        if(rowR > -1 && rowR < board.length && colC > -1 && colC < board[0].length) {
            if (Math.abs(board[rowR][colC]) === 1) {
                count += 1
            }
        }
    }
    return count; 
}    

var gameOfLife = function(board) {
    for (let row=0;row<board.length;row++) {
        for (let col=0;col<board[0].length;col++) {
            let isDead = board[row][col] === 1 ? false : true
            let neighbors = getNeighbors(board, row, col); 
            //we set to 2 and -1 instead of creating a seen
            if (isDead && neighbors === 3) board[row][col] = 2
            if (!isDead && (neighbors < 2 || neighbors > 3)) board[row][col] = -1
        }
    }
    
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] == -1) board[i][j] = 0;
            if (board[i][j] == 2) board[i][j] = 1;
        }
    }
    return board;
};


let testCase = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
console.log(gameOfLife(testCase))