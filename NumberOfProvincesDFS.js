var findCircleNum = function(M) {
    let seen = new Set()
    let res = 0
    let dfs = function(i) {
        for (let j = 0; j < M[0].length; j++) {
            if(M[i][j] === 1 && !seen.has(j)) {
                seen.add(j);
                dfs(j);
            }
        }
    }

    for (let i = 0; i < M.length; i++) {
        if (!seen.has(i)) {
            dfs(i)
            res++; 
        }
    }
    return res;
}

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))