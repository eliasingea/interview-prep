/**
 * @param {character[][]} matrix
 * @return {number}
 */

 //TODO: fix this tomorrow

 function maximalSquare(matrix) {
  if (matrix == null || matrix.length === 0) return 0;

  const h = matrix.length;
  const w = matrix[0].length;

  // init 2d sizes to 0
  const dp = [];
  for (let i = 0; i < h; i++) {
    const row = [];
    for (let j = 0; j < w; j++) row.push(0);
    dp.push(row);
  }

  let max = 0;

  for (let j = 0; j < w; j++) {
    dp[0][j] = Number(matrix[0][j]);
    max = Math.max(max, dp[0][j]);
  }

  for (let i = 0; i < h; i++) {
    dp[i][0] = Number(matrix[i][0]);
    max = Math.max(max, dp[i][0]);
  }

  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max * max;
}

/**
[
 ["1","0","1","0","0"],
 ["1","0","1","1","1"],
 ["1","1","1","1","1"],
 ["1","0","0","1","0"]
]



*/