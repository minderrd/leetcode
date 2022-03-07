/**
 * @see {@link https://leetcode.com/problems/set-matrix-zeroes/}
 * 
 * @author Wayne
 *
 * @todo check if any value of first column is zero
 * @todo check if any value except first column and first row is zero
 * @todo if the value of a cell is zero replace the 1st row and 1st column cell to zero
 * @todo check if first row should replace to zero
 * @todo check if first column should replace to zero
 *
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let colZero = false
    
    for (let i=0;i<matrix.length;i++) {
        if (matrix[i][0]===0) colZero = true
        for (let j=1;j<matrix[i].length;j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0]=0
                matrix[0][j]=0
            }
        }   
    }
    
    for (let i=1;i<matrix.length;i++) {
        for (let j=1;j<matrix[i].length;j++) {
            if (matrix[i][0]===0 || matrix[0][j]===0) {
                matrix[i][j]=0
            }
        }   
    }
    
    if (matrix[0][0] === 0) {
        for (let j=0; j<matrix[0].length;j++) {
            matrix[0][j]=0
        }
    }
    
    if (colZero) {
        for (let i=0;i<matrix.length;i++) {
            matrix[i][0]=0
        }
    }
};
