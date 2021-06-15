var rotate = function(matrix) {
    let e = matrix.length - 1
    let s = 0;

    while(s < e - 1) {
        let temp = matrix[s]
        matrix[s] = matrix[e]
        matrix[e] = temp
        s++; e--;
    }
    console.log(matrix)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i+1; j < matrix[i].length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    console.log(matrix)
};

rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])

