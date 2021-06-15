var minWindow = function (s, t) {
    if (s.length < t.length) return "";
    let m = new Map();
    //we are going to set the map with all the characters and their count
    for (let i = 0; i < t.length; i++) {
        m.set(t[i], m.get(t[i]) + 1 || 1);
    }
    //start the count at the size of m
    let start = 0, end = 0, count = m.size;
    //we will build res as we go through s
    let res = "";
    //this could be a for loop I think. We are just iterating through using end
    while (end <= s.length) {
        //we use count == 0 to indicate that it contains all the characters because once our maps chars are = 0 we
        //subtract from the count. For it to reach 0 all the characters have to go to 0
        if (count == 0) { // our window contains all characters of t
            //this is because we can keep incrementing start if the following conditions aren't met. 
            while (count == 0) {
                //basically if res < end-start we dont want to change it since we are trying to find the smallest substring. 
                if (res == "" || res.length > end-start) res = s.slice(start, end);
                //if we have the char at the start increment its value
                if (m.has(s[start])) m.set(s[start], m.get(s[start]) + 1);
                //if the char at the start is greater than zero. we increase count
                if (m.get(s[start]) > 0) count++;
                //increment start
                start++;
            }
        } else {
            //we will check to see if the current char is in the map. If it is we decrement the value. 
            if (m.has(s[end])) m.set(s[end], m.get(s[end]) - 1);
            //if that value is at zero we can decrement the count because that char is in the array
            if (m.get(s[end]) == 0) count--;
            //increment end. 
            end++;
        }
    }
    return res;
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

let s = "ABDOBECODEBANC", t = "ABC"

console.log(minWindow(s, t))