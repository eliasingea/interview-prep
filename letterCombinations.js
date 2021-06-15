/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return []
    const letterMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
      };
    let res = []
    var backtrack = function(i, leftOver) {
        if (i === digits.length) {
            res.push(leftOver);
            return;
        }
        let n = parseInt(digits[i])
        let curr = letterMap[n]
        for (const c of curr) {
            backtrack(i + 1, leftOver + c);
        }
    };
    
    backtrack(0, '');
    return res;
}

console.log(letterCombinations("23"))