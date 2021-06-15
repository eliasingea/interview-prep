var lengthOfLongestSubstring = function(s) {
    var stack = new Map()
    if(s == "" || s.length == 0 || s == undefined) return 0;
    var max = 0;
    for (var i = 0, j = 0; i < s.length; i++) {
        if (stack.has(s[i])) {
            j = Math.max(j, stack.get(s[i]) + 1);
        }
        stack.set(s[i], i);
        max = Math.max(max, i - j + 1)
    }
    return max; 
};