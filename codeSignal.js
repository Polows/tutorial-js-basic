const matrix = [
    [0,1,1,2],
    [0,5,0,0],
    [2,0,3,3]
]


function matrixElementsSum(matrix) {
    let sum = 0;
    matrix.forEach((row, i) => {
        row.forEach((num, j) => {
          if (matrix[i][j] === 0 && i + 1 < matrix.length) {
            matrix[i + 1][j] = 0
          }
          sum += matrix[i][j];
        })
    })
    return sum
}

matrixElementsSum(matrix);