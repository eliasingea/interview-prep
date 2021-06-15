var canPermutePalindrome = function(s) {
    let map = new Map()
    
    for (let ch of s) {
        if(map.has(ch)) {
            map.set(ch, map.get(ch) + 1)
        } else {
            map.set(ch, 1)
        }
    }
    let count = 0
    for (let [key, val] of map.entries()) {
        count += val % 2;
    }
    //there can't be more than one odd numbers    
    return count <= 1
};

let testCase = "racecar"
console.log(canPermutePalindrome(s))