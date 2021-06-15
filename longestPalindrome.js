/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return s;
    if (s.length === 2) return s[0] === s[1] ? s : s[0];
    let max = ''
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < 2; j++) {
            let left = i; 
            let right = i + j; 
            while(s[left] && s[left] === s[right]) {
                left--
                right++
            }
            if((right - left - 1) > max.length) {
                max = s.substring(left + 1, right)
            }
        }
    }
    return max;
};


console.log(longestPalindrome("babad"))
/**
s = "babad"
out = aba | bab

Palindrome ideas

first letter always has to equal the last letter
example 
i = 0 == h
n - 1 == h
i = 1 == a
n - 2 == a

hannah

*/