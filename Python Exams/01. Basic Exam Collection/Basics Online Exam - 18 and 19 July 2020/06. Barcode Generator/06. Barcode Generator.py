start, end = input(), input()

for num_1 in range(int(start[0]), int(end[0]) + 1):
    for num_2 in range(int(start[1]), int(end[1]) + 1):
        for num_3 in range(int(start[2]), int(end[2]) + 1):
            for num_4 in range(int(start[3]), int(end[3]) + 1):
                if num_1 & 1 and num_2 & 1 and num_3 & 1 and num_4 & 1:
                    print(f'{num_1}{num_2}{num_3}{num_4}', end=' ')
