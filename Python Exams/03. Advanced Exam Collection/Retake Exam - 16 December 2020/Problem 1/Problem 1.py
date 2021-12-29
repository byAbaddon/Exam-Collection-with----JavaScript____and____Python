man_list, women_list = [list(map(int, input().split())) for _ in range(2)]
matches = 0

while man_list and women_list:
    f = women_list[0]
    m = man_list[-1]

    if m <= 0:
        man_list.pop()
    elif f <= 0:
        women_list.pop(0)
    elif m % 25 == 0:
        [man_list.pop() for _ in range(2)]
    elif f % 25 == 0:
        [women_list.pop(0) for _ in range(2)]
    elif m == f:
        matches += 1
        man_list.pop()
        women_list.pop(0)
    else:
        man_list[-1] -= 2
        women_list.pop(0)

print('Matches:', matches)
if not man_list:
    print('Males left: none')
else:
    print(f'Males left: {", ".join([str(abs(x)) for x in man_list][::-1])}')

if not women_list:
    print('Females left: none')
else:
    print(f'Females left: {", ".join([str(x) for x in women_list])}')


'''
4 5 7 3 6 9 12
12 9 6 1
-----------------------
Matches: 3
Males left: 1, 7, 5, 4
Females left: none
'''
