jobs_list = {i: int(k) for i, k in enumerate(input().split(', '))}
index = int(input())
tasks = 0

for k, v in sorted(jobs_list.items(), key=lambda x: x[1]):
    if not k == index:
        tasks += v
    else:
        tasks += v
        break

print(tasks)

'''
3, 1, 10, 1, 2
0
'''
