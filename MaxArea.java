class Solution {
  public int maxArea(int[] height) {
    int maxArea = 0, left=0, right=height.length-1;
    while (left < right) {
      min = Math.min(height[left], height[right] * (right - left);
      maxArea = Math.max(maxArea, min);
      if (left < right)
        left++;
      right++;
    }
  }
}
