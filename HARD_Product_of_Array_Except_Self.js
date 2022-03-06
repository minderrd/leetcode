/**
 * @see {@link https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/827/} 
 *
 * @todo make an array of left product
 * @todo make an array of right product
 * @todo make an array of answers by left and right array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = []
    const right = []
    const answers = []
    
    // product of left
    for (let i=0; i<nums.length;i++){
        // base case
        if (i === 0) {
            left[i] = 1
            continue
        }
        
        left[i] = left[i-1] * nums[i-1]
    }

    // product of right
    for (let i=nums.length-1; i>=0; i--) {
        // base case
        if (i === nums.length-1) {
            right[i] = 1
            continue
        }
        
        right[i] = right[i+1] * nums[i+1]
    }
    
    // make the array of answers
    for (let i=0; i<nums.length;i++){
        answers[i] = right[i] * left[i]
    }
    
    return answers
};
