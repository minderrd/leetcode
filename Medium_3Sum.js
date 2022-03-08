/**
 * @author Wayne Yen
 *
 * @todo sort the array
 * @todo skip the same value for a
 * @todo loop the numbers for 0 to length-2 as target
 * @todo follow twoSum algorithm to find target then return
 * @todo skip the same value for b
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const answer = []
    nums = nums.sort((a, b) => {
        return a-b
    })

    for (let i=0; i<nums.length-2; i++) {
        // avoid dups
        if (i > 0 && nums[i-1] === nums[i]) continue
        
        const target = nums[i]
        
        let left = i+1
        let right = nums.length-1
        
        while (left < right) {
            const sum = nums[left] + nums[right]
            if (sum > -target) {
                right -= 1
            } else if (sum < -target) {
                left += 1
            } else {
                answer.push([target, nums[left], nums[right]])
                // answer.push('answer')
                left += 1
                // avoid dups
                while (nums[left-1] === nums[left]) {
                    left += 1
                }
            }
            
        }
    }
    
    return answer
};
