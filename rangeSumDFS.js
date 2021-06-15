var rangeSumBST = function(root, low, high) {
    let sum = 0
    if(!root) return sum
    if(root.val >= low && root.val <= high) 
        sum += root.val
        sum += rangeSumBST(root.left, low, high)
        sum += rangeSumBST(root.right, low, high)
        return sum
};