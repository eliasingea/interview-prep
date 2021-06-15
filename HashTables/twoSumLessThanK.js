var twoSumLessThanK = function(nums, k) {
    let max = -1
    let left = 0
    let right = nums.length - 1
    nums.sort((a,b) => a - b); 
    while (left < right) {
        let sum = nums[left] + nums[right]; 
        if (sum < k) {
            max = Math.max(sum, max); 
            left++;
        } else {
            right--;
        }
    }
    return max; 
}

console.log(twoSumLessThanK(
    [34,23,1,24,75,33,54,8],60
))