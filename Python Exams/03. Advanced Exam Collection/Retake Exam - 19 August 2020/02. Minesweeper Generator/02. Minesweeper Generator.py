SIZE, bombs = [int(input()) for _ in range(2)]
matrix = [[0] * SIZE for _ in range(SIZE)]

for _ in range(bombs):
    r_bomb_pos, c_bomb_pos = eval(input())
    for row in range(SIZE):
        for col in range(SIZE):
            if row == r_bomb_pos and col == c_bomb_pos:
                matrix[row][col] = '*'


com_dict = {'up': (-1, 0), 'down': (+1, 0), 'left': (0, -1), 'right': (0, +1),
            'up_left': (-1, -1), 'up_right': (-1, +1), 'down_left': (+1, -1), 'down_right': (+1, +1)}


def walk_around(r, c):
    bombs_around = 0
    for cell in com_dict.values():
        row_b, col_b = cell
        row_b += r
        col_b += c
        if 0 <= row_b < SIZE and 0 <= col_b < SIZE:
            if matrix[row_b][col_b] == '*':
                bombs_around += 1
    return bombs_around


for row in range(SIZE):
    for col in range(SIZE):
        if not matrix[row][col] == '*':
            matrix[row][col] = walk_around(row, col)

[print(*row) for row in matrix]


'''
5
3
(1, 1)
(2, 4)
(4, 1)
------------------
1 1 1 0 0
1 * 1 1 1
1 1 1 1 *
1 1 1 1 1
1 * 1 0 0
'''

