people = int(input())
wagons = list(map(int, input().split()))

for i in range(len(wagons)):
    if wagons[i] == 4:
        continue
    else:
        while not wagons[i] == 4:
            if people > 0:
                people -= 1
                wagons[i] += 1
            else:
                print('The lift has empty spots!')
                print(*wagons)
                exit()
if people > 0:
    print(f'There isn\'t enough space! {people} people in a queue!')
print(*wagons)


'''
15
0 0 0 0

------------output: 
The lift has empty spots!
4 4 4 3
'''
