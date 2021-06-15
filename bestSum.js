//return the shortest sum arr

const bestSum = (targetSum, nums, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null   

    let smallestRem = null
    for(let num of nums) {
        const remainder = targetSum - num
        const res = bestSum(remainder, nums, memo)
        if(res !== null) {
            if(smallestRem === null || smallestRem > res.length) {
                smallestRem = [...res, num]
                memo[targetSum] = [...smallestRem, num]
            }
        }
    }
    return smallestRem
}


console.log(bestSum(8, [3, 4, 5, 2, 7]))
