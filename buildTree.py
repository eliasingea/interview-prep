from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def buildTree(preorder, inorder):
    
    preorder = deque(preorder)
    inorder_map = {}
    for i, order in enumerate(inorder):
        inorder_map[order] = i
    
    def build_tree(start, end):
        if start > end: return None
        #popleft removes the first element of the deque
        root_index = inorder_map[preorder.popleft()]
        root = TreeNode(inorder[root_index])
        root.left = build_tree(start, root_index-1)
        root.right = build_tree(root_index+1, end)
        return root
    return build_tree(0, len(inorder) - 1)

def preOrder(node): 
    if not node: 
        return      
    print(node.val)
    preOrder(node.left) 
    preOrder(node.right) 

node = buildTree([3,9,20,15,7], [9,3,15,20,7])
preOrder(node)

