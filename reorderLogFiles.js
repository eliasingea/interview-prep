var reorderLogFiles = function(logs) {
    var digitLogs = [];
    var alfLogs = [];
    var body = function(s) {
        return s.slice(s.indexOf(' ') + 1); 
    }
    var isNum = function(s) {
         return /\d/.test(s);
    }
    var compare = function(a, b) {
        var n = body(a).localeCompare(body(b));
        if(n !== 0) return n;
        return a.localeCompare(b); 
    }
    
    for(var f of logs) {
        if(isNum(body(f))) {
            digitLogs.push(f);
        } else {
            alfLogs.push(f); 
        } 
    }
    return [...alfLogs.sort(compare), ...digitLogs];

};