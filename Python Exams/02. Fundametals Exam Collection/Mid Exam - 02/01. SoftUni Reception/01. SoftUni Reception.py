employees = sum([int(input()) for x in range(3)])
students = int(input())
time = 0

while students > 0:
    time += 1
    students -= employees

    if time % 4 == 0:
        time += 1


print(f'Time needed: {time}h.')


'''
1
2
3
45

-------output:
Time needed: 10h.
'''