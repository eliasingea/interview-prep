let smallestSubarrayGivenSum = function(arr, target) {
    let smallestArr = Number.MAX_SAFE_INTEGER
    let runningSum = 0
    let lo = 0
    if (arr.length === 1) return 1; 
    for (let hi = 0; hi < arr.length; hi++) {
        if (smallestArr === 1) {
            return 1; 
        }
        runningSum += arr[hi]; 
        while(runningSum >= target) {
            smallestArr = Math.min(smallestArr, hi - lo + 1)
            runningSum -= arr[lo];  
            lo++
        }
    }
}

console.log(smallestSubarrayGivenSum([4, 2, 2, 7, 8, 1, 2, 8, 10], 8))