import os
os.system('clear')

size_matrix = int(input())
matrix = [char for char in [input().split() for _ in range(size_matrix)]]
directions_dict = {'up': (-1, 0), 'right': (0, 1), 'down': (1, 0), 'left': (0, -1)}
targets = 0
destroyed_targets = 0
mission_done = False

for row_index in range(len(matrix)):
        for col_index in range(len(matrix[row_index])):  
            if matrix[row_index][col_index] == 't':
                targets += 1   
                destroyed_targets += 1     # count target

for _ in range(int(input())):
    for row_index in range(len(matrix)):
        for col_index in range(len(matrix[row_index])):
            if matrix[row_index][col_index] == 'p':
                plain_row, plain_col = row_index, col_index   #find plane position

    command, direction, step = [int(x) if x.isdigit() else x for x in input().split()]
    
    row_ch, col_ch = directions_dict[direction]
    row = plain_row + (row_ch * step)
    col = plain_col + (col_ch * step)

    if col >= size_matrix or row >= size_matrix or row < 0 or col < 0:
        continue
                    
    if command == 'shoot':
        if matrix[row][col] == 't':
            destroyed_targets -= 1
        matrix[row][col] = 'x'

        if destroyed_targets == 0:
            mission_done = True
            break
      
    elif command == 'move':
        if matrix[row][col] != 'x' and matrix[row][col] != 't':
           matrix[plain_row][plain_col ]= '.' 
           matrix[row][col] = 'p'

                
if mission_done:
    print(f'Mission accomplished! All {targets} targets destroyed.')
else:
    print(f'Mission failed! {destroyed_targets} targets left.')

[print(*mtx) for mtx in matrix]



