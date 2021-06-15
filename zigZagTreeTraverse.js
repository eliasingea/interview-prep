var zigzagLevelOrder = function(root) {
    let res = []
    let dfs = function(root, level) {
        if (!root) return
        
        if (res[level] == null) {
            res.push([]);
        }
        
        if(level % 2 === 0) {
            res[level].push(root.val)
        } else {
            res[level].unshift(root.val)
        }
        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
        
    }
    dfs(root, 0)
    return res
};