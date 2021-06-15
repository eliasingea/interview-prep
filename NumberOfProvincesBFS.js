var findCircleNum = function(M) {
    
    //Seen basically lets us know if we have visited the node. 
    let seen = new Set()
    let res = 0
    //Stack is what we are going to explore next
    let stack = [];

    for (let i = 0; i < M.length; i++) {
        //Proceed only if we haven't already seen i
        if(!seen.has(i)) {
            //we push i to the stack as it is the first node we are going to explore
            stack.push(i);
            //Keep looping until the current stack is empty. 
            while(stack.length) {
                //set curr to the last element added in the stack. This will remove that item from the stack. 
                let curr = stack.pop()
                //add the current element to seen since we just popped it from the stack
                seen.add(curr); 
                //iterate through the inner array
                for (let j = 0; j < M[0].length; j++) {
                    //if M[i][j] === 1 that means there is a connection.
                    //we also don't want to push j to the stack if we already seen it. 
                    //this allows us to skip situations where i and j are the same. i == j && j == i
                    if(M[curr][j] === 1 && !seen.has(j)) {
                        //push j to the stack. This will allow us to visit the new j elements
                        stack.push(j)
                    }
                }
            }
            //increase res because we have now gone through the stack for the first inner array
            res++
        }
    }
    return res;
}

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))