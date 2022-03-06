/**
 * @see {@link} https://leetcode.com/problems/4sum-ii
 * 
 * @author Wayne Yen
 * 
 * @todo create a map of possible result for first two elements
 * @todo create a map of possible result for last two elements
 * @check how many results could match to zero
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let count = 0
    let m = {}
    
    for (let i=0;i<nums1.length;i++) {
        for (let j=0; j<nums2.length;j++) {
            if (m[nums1[i] + nums2[j]] === undefined) m[nums1[i] + nums2[j]] = 0
            m[nums1[i] + nums2[j]] += 1
        }
    }
    
    for (let k=0;k<nums3.length;k++) {
        for (let l=0; l<nums4.length;l++) {
            if (m[nums3[k] + nums4[l]] === undefined) m[nums3[k] + nums4[l]] = 0
            if(m[-(nums3[k] + nums4[l])])  count += m[-(nums3[k] + nums4[l])]
        }
    }
    

    return count
};
