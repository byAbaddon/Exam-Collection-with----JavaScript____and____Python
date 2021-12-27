SIZE = 8
matrix = [input().split() for _ in range(SIZE)]
capture_queens = []
king_pos = [(row, col) for col in range(SIZE) for row in range(SIZE) if matrix[row][col] == 'K'][0]
com_dict = {'up': (-1, 0), 'down': (+1, 0), 'left': (0, -1), 'right': (0, +1),
            'up_left': (-1, -1), 'up_right': (-1, +1), 'down_left': (+1, -1), 'down_right': (+1, +1)}


def move(direction):
    row, col = king_pos
    while True:
        row += com_dict[direction][0]
        col += com_dict[direction][1]
        if 0 <= row < SIZE and 0 <= col < SIZE:
            if matrix[row][col] == 'Q':
                capture_queens.append([row, col])
                break
        else:
            break


move('up')
move('down')
move('right')
move('left')
move('up_left')
move('up_right')
move('down_left')
move('down_right')

if capture_queens:
    print(*capture_queens, sep='\n')
else:
    print('The king is safe!')


'''
. . . . . . . .
Q . . . . . . .
. K . . . Q . .
. . . Q . . . .
Q . . . Q . . .
. Q . . . . . .
. . . . . . Q .
. Q . Q . . . .

'''
