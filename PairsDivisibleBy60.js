var numPairsDivisibleBy60 = function(time) {
    var total = 0; 
    var map = new Map()
    for (var t of time) {
        var mod = t % 60
        var rem = mod === 0 ? 0 : 60 - mod; 
        if(map.has(rem)) total += map.get(rem);
        map.set(mod, (map.get(mod) || 0) + 1); 
    }
    return total;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));