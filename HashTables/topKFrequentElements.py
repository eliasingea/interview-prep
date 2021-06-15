class Solution:
    import heapq
    from collections import Counter
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        if(k == len(nums)): return nums
        count = Counter(nums)
        return heapq.nlargest(k, count.keys(), key=count.get)