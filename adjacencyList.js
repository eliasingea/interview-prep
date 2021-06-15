function findMinHeight(n, edges) {

    let adj = makeAdjacencyList(4, edges); 
    let leaves = []
    let m = n
    for (const [node, edges] of adj) {
        if (edges.size === 1) {
          leaves.push(node);
        }
    }
    console.log(leaves)
    while(m > 2) {
        m -= leaves.length; 
        let newLeaves = []
        for (let leaf of leaves) {
            let j = adj.get(leaf).values().next().value
            adj.get(j).delete(leaf)
            if (adj.get(j).size === 1) {
                newLeaves.push(j)
            }
            adj.delete(leaf)
        }
        leaves = newLeaves
    }
    return leaves;
};
function makeAdjacencyList(n, edges) {
    const adjacencyList = new Map();
    
    for (let i = 0; i < n; i++) {
      adjacencyList.set(i, new Set());
    }
    for (const [v1, v2] of edges) {
      adjacencyList.get(v1).add(v2);
      adjacencyList.get(v2).add(v1);
    }
    return adjacencyList;
};

console.log(findMinHeight(4, [[1,0],[1,2],[1,3]])); 