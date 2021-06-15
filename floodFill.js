var floodFill = function(image, sr, sc, newColor) {
    let startingColor = image[sr][sc]
    let visited = new Set()  
    let dfs = function(pixel, location) {
        let l1 = location[0]
        let l2 = location[1]
        
        if (pixel === startingColor) {
            image[l1][l2] = newColor
        }
        
        visited.add(location.toString())
        let dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]]; 
        for (let dir of dirs) {
            let posX = l1 + dir[0];
            let posY = l2 + dir[1];
            if(posX > -1 && posX < image.length && posY > -1 && posY < image[0].length 
               && image[posX][posY] === startingColor && !visited.has([posX, posY].join())) {
                dfs(image[posX][posY], [posX, posY])
            }
            
        }
    }
    //visited.add([sr, sc])
    dfs(startingColor, [sr, sc])
    return image
    
};

//console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1))