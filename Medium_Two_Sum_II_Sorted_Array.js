/**
 * @author Wayne
 *
 * @todo make two pointers at left and right
 * @todo if sum of left, right value equals to target then return
 * @todo sum greater then target then right pointer move left by minus 1
 * @todo sum greater then target then left pointer move right by plus 1
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length - 1
    
    while (i < j) {
        const sum = numbers[i] + numbers[j]
        if (sum === target) {
            return [i+1, j+1]
        } else if (sum > target) {
            j -= 1
        } else if (sum < target) {
            i += 1
        }
    }
};
