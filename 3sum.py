def threeSum(nums):
    res = []
    if not nums or len(nums) == 0:
        return []
    sorted_nums = sorted(nums)
    for i in range(0, len(sorted_nums)):
        if nums[i] > 0:
            break
        if i == 0 or nums[i - 1] != nums[i]:
            lo, hi = i + 1, len(nums) - 1
            while(lo < hi):
                sum = sorted_nums[i] + sorted_nums[lo] + sorted_nums[hi]
                if sum < 0:
                    lo += 1
                elif sum > 0:
                    hi += 1
                else:
                    res.append([sorted_nums[i], sorted_nums[lo], sorted_nums[hi]])
                    lo += 1
                    hi -= 1
                    while lo < hi and sorted_nums[lo] == sorted_nums[lo - 1]:
                        lo += 1
    return res

nums = [-1, 0, 1, 2, -1, -4]
print(threeSum(nums))