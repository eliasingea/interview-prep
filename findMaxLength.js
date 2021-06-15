var findMaxLength = function(nums) {
    let hash = new Map()
    hash.set(0, -1)
    let count = 0
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) count--; 
        else count++;

        if (hash.has(count)) max = Math.max(max, i - hash.get(count)); 
        else hash.set(count, i)
    }
    return max; 
};
console.log(findMaxLength([1, 0, 0, 1, 0, 1, 0]))