/**
 * @see {@link https://leetcode.com/problems/spiral-matrix/solution/}
 * @author Wayne
 * 
 * @todo calculate the border of  top bottom left right
 * @todo loop through all element by compare answer length and rows * columns
 * @todo move right
 * @todo move down
 * @todo move left if not the same row of moving right
 * @todo move up if not the same row of moving down
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let len = matrix.length * matrix[0].length
    
    let top = 0
    let bottom = matrix.length - 1
    let right = matrix[0].length - 1
    let left = 0
    
    let answer = []
    
    while(answer.length < len) {
        // move from left to right
        for (let i=left; i<=right; i++) {
            answer.push(matrix[top][i])
        }
        
        // move top to down
        for (let i=top+1; i<=bottom; i++) {
            answer.push(matrix[i][right])
        }
        
        // move backward
        if (top != bottom) {
            for (let i=right-1; i>=left; i--) {
                answer.push(matrix[bottom][i])
            }
        }

        
        // move up
        if (left != right) {
            for (let i=bottom-1; i>top; i--) {
                answer.push(matrix[i][left])
            }
        }
        
        left++
        right--
        top++
        bottom--
    }
    
    return answer
};
