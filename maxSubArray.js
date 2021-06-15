var maxSubArrayLen = function (nums, k) {
    let subarrayLength = 0,
      sum = 0,
      map = {0: -1};
    
    nums.forEach((number, i) => {
      sum += number;
      //we are keeping track of each sum and the index that made that happen. 
      if (!map.hasOwnProperty(sum)) {
        map[sum] = i;
      }
      //this will dictate where in the index we have sum - k
      if (map.hasOwnProperty(sum - k)) {
        //set max to the max of subAar and i - map[sum - k]. So where in the index we got that value - 1
        subarrayLength = Math.max(subarrayLength, i - map[sum - k]);
      }
    });
  
    return subarrayLength;
  };

let nums = [1, -1, 5, -2, 3], k = 3

console.log(maxSubArrayLen(nums, k)); 