/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    if (board.length === 0 ) return false;

    let h = board.length; 
    let w = board[0].length; 

    let dfs = function(x, y, k) {
        if (x < 0 || x > board.length-1) return
        if (y < 0 || y > board[0].length-1) return
        if (board[x][y] !== word[k]) return false;
        if (k === word.length - 1) return true;
        board[x][y] = "*"
        res = (dfs(x + 1, y, k+1)||
        dfs(x, y + 1, k+1)||
        dfs(x-1, y, k+1)||
        dfs(x, y-1, k+1))
        board[x][y] = word[k];
        return res
    }
    
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false
};