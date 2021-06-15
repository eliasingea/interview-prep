/**
 * @param {string} s
 * @return {string}
 * 
 * create a map with the frequency of each character. O(n)
 * create an array of keys sorted descending order. 
 * loop through the keys array and increment res with the key. 
 * Str.repeat is awesome here because it lets us add as many keys as we need instead of writing a for loop. 
 * 
 * Overall complexity = O(n) + O(m log m) m = unique characters in string. Sort = O(n log n) in js
 */
var frequencySort = function(s) {
    let map = new Map()
    
    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let res = ""
    var sortedkey = [...map.keys()].sort((a, b) => map.get(b) - map.get(a))
    console.log(sortedkey)
    for (let key of sortedkey) {
       res += key.repeat(map.get(key))
    }
    return res
};

console.log(frequencySort("tree"))