let longestSubstring = function(arr, k) {
    let maxSubstring = Number.MIN_SAFE_INTEGER
    let trackChar = new Map()
    let lo = 0
    for (let hi = 0; hi < arr.length; hi++) {
        if (trackChar.has(arr[hi])) {
            trackChar.set(arr[hi], trackChar.get(arr[hi]) + 1)
        } else {
            trackChar.set(arr[hi], 1)
        }
        while(trackChar.size > k) {
            trackChar.set(arr[lo], trackChar.get(arr[lo]) - 1)
            if (trackChar.get(arr[lo]) === 0) {
                trackChar.delete(arr[lo]); 
            }
            lo++
        }
        maxSubstring = Math.max(maxSubstring, hi - lo + 1);
    }
    return maxSubstring; 
}

console.log(longestSubstring(['A', 'A', 'H', 'H', 'I', 'B', 'C'], 2))