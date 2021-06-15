/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s; 
    
    let rows = [];
    
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows.push(""); 
    }
    let currRow = 0; 
    let goingDown = false; 
    
    for (let i = 0; i < s.length; i++) {
        rows[currRow] += s[i]; 
        if(currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;
        currRow += goingDown ? 1 : -1
    }
    let returns = ""
    for (let str of rows) {
        returns += str
    }
    return returns; 
};

console.log(convert("PAHNAPLSIIGYIR", 3))


/**
P   A   H   N
A P L S I I G
Y   I   R


len = 14
n = 3 

14/3 = 
*/
