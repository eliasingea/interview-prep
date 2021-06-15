class Node: 
    def __init__(self, key): 
        self.left = None
        self.right = None
        self.val = key 
        
def insert(node, key):
    #if we found a leaf
    if node is None:
        return Node(key)
    else:
        if node.val == key:
            return node
        elif node.val > key:
            node.left =  insert(node.left, key)
        else: 
            node.right = insert(node.right, key)
    return node

def balancedInsert(arr):
    if not arr:
        return None
    
    mid = int((len(arr)) / 2)

    root = Node(arr[mid])
    root.left = balancedInsert(arr[:mid])
    root.right = balancedInsert(arr[mid + 1:])
    return root
    

def inOrder(root):
    if root:
        inOrder(root.left)
        print(root.val)
        inOrder(root.right)

def search(node, key):
    if node is None: return False
    if node.val == key:
        return True
    else:
        if node.val > key:
            search(node.left, key)
        else:
            search(node.right, key)
    return False    
    
def preOrder(node): 
    if not node: 
        return
      
    print(node.val)
    preOrder(node.left) 
    preOrder(node.right)  

def postOrder(node):
    if not node:
        return
    postOrder(node.left)
    postOrder(node.right)
    print(node.val)

def calls():
    arr = [1, 4, 3, 2, 8, 9, 3, 5]
    root = Node(arr[0])
    for i in range(1, len(arr)):
        root = insert(root, arr[i])

    inOrder(root)
    print(search(root, 6))
    arr.sort()
    balancedRoot = balancedInsert(arr)
    preOrder(balancedRoot)
    print("post order")
    print(postOrder(balancedRoot))

calls()