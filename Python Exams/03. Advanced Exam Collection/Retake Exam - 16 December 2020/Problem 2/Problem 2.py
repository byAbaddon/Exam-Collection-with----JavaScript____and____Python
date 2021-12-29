word = input()
SIZE = int(input())
matrix = [list(map(str, input())) for _ in range(SIZE)]
loop = int(input())
player_pos = [(row, col) for col in range(SIZE) for row in range(SIZE) if matrix[row][col] == 'P'][0]
com_dict = {'up': (-1, 0), 'down': (+1, 0), 'left': (0, -1), 'right': (0, +1)}

for _ in range(loop):
    com = input()
    row, col = player_pos
    row += com_dict[com][0]
    col += com_dict[com][1]

    if 0 <= row < SIZE and 0 <= col < SIZE:
        if matrix[row][col].isalpha():
            word += matrix[row][col]
        matrix[player_pos[0]][player_pos[1]] = '-'
        matrix[row][col] = 'P'
        player_pos = (row, col)
    else:
        word = word[:-1]

print(word)
[print(*x, sep='') for x in matrix]

'''
Hello
4
P---
Mark
-l-y
--e-
4
down
right
right
right
-----------------
HelloMark
----
---P
-l-y
--e-
'''
