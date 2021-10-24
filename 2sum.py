def twoSum(nums, target):
    nums_map = {}
    for i in range(len(nums)):
        diff = target - nums[i]
        if diff in nums_map:
            return [i, nums_map[diff]]
        else:
            nums_map[nums[i]] = i

print(twoSum([-3,4,3,90], 0))

