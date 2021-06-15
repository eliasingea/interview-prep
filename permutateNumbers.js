/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    if (nums.length === 1) return [nums]
    let dfs = function(res, temp, nums) {
        if (temp.length === nums.length) {
            res.push(Array.from(temp))
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (temp.includes(nums[i])) continue;
                temp.push(nums[i]);
                dfs(res, temp, nums);
                temp.splice(temp.length - 1);
            }
        }
    }
    dfs(res, [], nums)
    return res;    
};
  

console.log(permute([1, 2, 3])); 


