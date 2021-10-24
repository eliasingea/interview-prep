var groupAnagrams = function(strs) {
    
    var map = new Map();
    
    for(let str of strs) {
        let strCount = new Array(26).fill(0)
        for(let s of str) {
            strCount[s.charCodeAt() - 'a'.charCodeAt()]++
        }
        let key = strCount.join("#")
        if(key in map) {
            map[key].push(str)
        } else {
            map[key] = [str]
        }
    }
    return Object.values(map)
};