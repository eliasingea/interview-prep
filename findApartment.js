let findApartments = function(blocks, reqs) {

    let seen = new Set()

    let dfs = function(index, count=0) {
        let metReq = []
        if (index > -1 && index < blocks.length && !seen.has(index)) {
            seen.add(index)
            for (let i = 0; i < reqs.length; i++) {
                if(blocks[index][reqs[i]] == true) {
                    count = Math.min(count, 0)
                    metReq[i] = count
                } else {
                    count = Number.MAX_SAFE_INTEGER 
                    metReq[i] = count; 
                }
            }
            let down = dfs(index - 1, count)
            let up = dfs(index + 1, count)
            return Math.min(down, up)
        } 
    }
    return dfs(0)
}




console.log(findApartments(
Blocks = [
    { //block 1
        "gym": false,
        "school": true, 
        "store": false
    }, 
    { //block 2
        "gym": true, 
        "school": false, 
        "store": false
    }, 
    { //block 3
        "gym": true, 
        "school": true, 
        "store": false
    }, 
    { //block 4
        "gym": false, 
        "school": true, 
        "store": true
    }
],
reqs = ["gym", "school", "store"]
)); 
//what is the minimum distance that meets requirments from an initial location. 


