var floodFill = function(image, sr, sc, newColor) {
    let startingColor = image[sr][sc]
    if (startingColor === newColor) return image;
    let queue = []
    queue.push([sr, sc]);
    while(queue.length) {
        let pair = queue.pop()
        let row = pair[0]
        let col = pair[1]
        image[row][col] = newColor    
        let dirs = [[0, -1], [1, 0], [0, 1], [-1, 0]]; 
        for (let dir of dirs) {
            let rowR = row + dir[0]
            let colC = col + dir[1]

            if(rowR > -1 && rowR < image.length && colC > -1 && colC < image[0].length 
                && image[rowR][colC] === startingColor) {
               queue.push([rowR, colC])
            }
        }
    }
    return image
};

console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1))