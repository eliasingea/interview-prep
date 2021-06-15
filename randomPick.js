/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.weights = []
    prefix_sum = 0
    for (let weight of w) {
        prefix_sum += weight
        this.weights.push(prefix_sum)
    }
    this.total_sum = prefix_sum
};

/**
 * @return {number}
 * we are doing a binary search so that we can get O(log(n)) complexity
 */
Solution.prototype.pickIndex = function() {
    let target = this.total_sum * Math.random()
    let w = this.weights
    let low = 0, high = w.length; 
    while (low < high) {
        mid = Math.floor(low + (high - low) / 2)
        if (target > w[mid]) low = mid + 1
        else high = mid
    }
    return low
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */