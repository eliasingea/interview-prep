/**
 * @param {number[]} T
 * @return {number[]}
 * 
 * This is an example of a Monotonous stack.
 * It allows us to go through an an array and keep track of things like max, min etc
 * in O(N) time. 
 */
var dailyTemperatures = function(T) {
    let res = new Array(T.length).fill(0)
    let stack = []
    for (let i = 0; i < T.length; i++) {
        while(stack.length && T[i] > T[stack[stack.length-1]]) {
            let idx = stack.pop()
            res[idx] = i - idx;
        }
        stack.push(i)
    }
    return res
};

console.log(dailyTemperatures(
    [73, 74, 75, 71, 69, 72, 76, 73]
))