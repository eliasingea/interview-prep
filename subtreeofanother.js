/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

var isSubtree = function(s, t) {
    if(s == null) return false
    if(isSame(s, t)) return true
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};

let isSame = function(node1, node2) {
    if(node1 && node2) {
        return node1.val === node2.val && isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
    }
    return node1 === node2
    
};

ß