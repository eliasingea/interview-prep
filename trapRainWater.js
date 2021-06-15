var trap = function(height) {
    if(!height || height.length === 0) return 0;
    let counter = 0; 
    let n = height.length; 
    let leftMax = height[0];
    let rightMax = height[n - 1]; 
    let left = 1
    let right = n - 1
    
    while(left <= right) {
        if(leftMax <= rightMax) {
            leftMax = Math.max(leftMax, height[left]); 
            counter += leftMax - height[left]; 
            left++; 
        } else {
            rightMax = Math.max(rightMax, height[right]); 
            counter+= rightMax - height[right]; 
            right--; 
        }
    }
    return counter;
};