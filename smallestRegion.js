/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
    let map = new Map()
    let path = new Set()

    //create a map from the subregion to its parent region
    /**
     * NA -> Earth
     * SA -> Earth
     * USA -> NA
     * Canda -> NA
     * etc
     */
    for(let region of regions) {
       for (let subRegion of region.splice(1)) {
           map.set(subRegion, region[0])
       }
    }
    /**
     * we will keep updating region1 until we get to the top parent and add all the parent regions in path
     * start with Quebec -> Canada -> North America -> Earth
     */
    
    while (region1) {
        path.add(region1)
        region1 = map.get(region1)
    }
    /**
     * keep updating region2 with whatever corresponds with the region as long as region1's path contains it. 
     * Region 2 = New York | map.get(NY) = USA
     * Path doesn't have has usa so we keep going. region2 = USA | map.get(USA) = North America
     * region2 = North America. Path has region2 so we stop and return NA. 
     */
    
    while(!path.has(region2)) {
        region2 = map.get(region2)
    }
    return region2
};

console.log(findSmallestRegion(
    [["Earth","North America","South America"],["North America","United States","Canada"],["United States","New York","Boston"],["Canada","Ontario","Quebec"],["South America","Brazil"]],
    "Quebec",
    "New York"
));