/**
 * @see {@link https://leetcode.com/problems/group-anagrams/submissions/}
 *
 * @author Wayne
 * 
 * Create special key for mapping string without ordering
 * @todo create a map for storing key and string
 * @todo create a char map for storing number or characters
 * @todo make the char map into a char string with special delemeter (;)
 * @todo put the str into map by char string
 * @todo retrieve the map values
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}
    
    for (let i=0;i<strs.length;i++) {
        const str = strs[i]
        let keyMap = []
        for (let j=0;j<str.length;j++) {
            const pos = str[j].charCodeAt(0) - 97
            
            if (keyMap[pos] === undefined)keyMap[pos]=0
            keyMap[pos] += 1
        }
        
        const key = keyMap.join(';')
        
        if (map[key] === undefined) map[key] = []
        map[key].push(str)
    }
    
    return Object.values(map)
};
