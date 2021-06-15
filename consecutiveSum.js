var consecutiveNumbersSum = function(N) {
    let nums = []
    let res = 1
    for (let i = 1; i <= (N+1)/2; i++) {
        nums.push(i); 
    }
    //console.log(nums)
    let numsSum = nums.reduce((a, b) => a + b, 0)
    //console.log(numsSum)
    while(numsSum !== N) {
        numsSum--; 
        res++; 
    }
    return res; 
};

console.log(consecutiveNumbersSum(9))