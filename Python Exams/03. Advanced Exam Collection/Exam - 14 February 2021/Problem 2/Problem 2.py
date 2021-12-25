SIZE = int(input())
matrix = [list(map(lambda x: int(x) if x.isdigit() else x, input().split())) for _ in range(SIZE)]
player_pos = [(row, col) for col in range(SIZE) for row in range(SIZE) if matrix[row][col] == 'P'][0]
com_dict = {'up': (-1, 0), 'down': (+1, 0), 'left': (0, -1), 'right': (0, +1)}
path_list = []
money = 0

while True:
    com = input()
    if com in com_dict:
        row = player_pos[0] + com_dict[com][0]
        col = player_pos[1] + com_dict[com][1]
        player_pos = (row, col)
        if 0 <= row < SIZE and 0 <= col < SIZE and not matrix[row][col] == 'X':
            money += matrix[row][col]
            path_list.append([row, col])
        else:
            print(f'Game over! You\'ve collected {money // 2} coins.\nYour path:')
            [print(x) for x in path_list]
            break

    if money >= 100:
        print(f'You won! You\'ve collected {money} coins.\nYour path:')
        [print(x) for x in path_list]
        break


'''
5
1 X 7 9 11
X 14 46 62 0
15 33 21 95 X
P 14 3 4 18
9 20 33 X 0
right
right
up
up
left
down
-----------------------------------------output:
You won! You've collected 131 coins.
Your path: 
[3, 1]
[3, 2]
[2, 2]
[1, 2]
[1, 1]
[2, 1]

'''
