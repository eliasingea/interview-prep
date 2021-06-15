var findItinerary = function (tickets) {
    let map = new Map()
    let result = []
    for (let i = 0; i < tickets.length; i++) {
        let from = tickets[i][0]
        let to = tickets[i][1]
        if (map.has(from)) {
            map.get(from).push(to)
        } else {
            map.set(from, [to])
        }
    }

    for (let key of map.keys()) {
        map.get(key).sort()
    }

    var dfs = function(node) {
        var des = map.get(node)
        while(des && des.length > 0) {
            dfs(des.shift()); 
        }
        result.unshift(node)
    }
    dfs('JFK')
    return result
};