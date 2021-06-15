/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxTillHere = nums[0]
    let minTillHere = nums[0]
    let res = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        let currMax = Math.max(maxTillHere*nums[i], nums[i], nums[i] * minTillHere);
        let currMin = Math.min(minTillHere*nums[i], nums[i], nums[i] * maxTillHere); 
        
        maxTillHere = currMax
        minTillHere = currMin
        res = Math.max(res, currMax); 
    }
    return res
    
};


console.log(maxProduct([2,3,-2,4]))