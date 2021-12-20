targets_list = list(map(int, input().split()))
shoot_list = [int(x) for x in iter(input, 'End')]

for shoot in shoot_list:
    if 0 <= shoot < len(targets_list):
        target = targets_list.pop(shoot)
        for target_index in range(len(targets_list)):
            if targets_list[target_index] <= target:
                if targets_list[target_index] ^ -1:
                    targets_list[target_index] += target
            else:
                targets_list[target_index] -= target
        targets_list.insert(shoot, -1)

print(f'Shot targets: {targets_list.count(-1)} ->', *targets_list)


'''
24 50 36 70
0
4
3
1
End

------------output:
Shot targets 3 -> -1 -1 130 -1
'''
