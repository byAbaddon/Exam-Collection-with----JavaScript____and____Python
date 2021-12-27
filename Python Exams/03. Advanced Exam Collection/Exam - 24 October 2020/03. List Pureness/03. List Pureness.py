def best_list_pureness(nums_list, k):
    current = sum([k * i for i, k in enumerate(nums_list)])
    rotations = 0
    best_pureness = current
    for i in range(k):
        current = nums_list.insert(0, nums_list.pop())
        current = sum([x * i if x > 0 else x for i, x in enumerate(nums_list)])
        if best_pureness < current:
            best_pureness = current
            rotations = i + 1

    return f"Best pureness {best_pureness} after {rotations} rotations"

'''
test = ([1, 2, 3, 4, 5], 10)
result = best_list_pureness(*test)
print(result)
------------------
Best pureness 40 after 0 rotations
'''