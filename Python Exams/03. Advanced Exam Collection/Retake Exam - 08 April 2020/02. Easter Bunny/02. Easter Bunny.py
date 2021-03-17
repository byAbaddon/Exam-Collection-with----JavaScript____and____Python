n = int(input())
matrix = [row for row in [input().split() for _ in range(n)]]
big_direction = {}
big_direction_sum = {}
bunny_position = ()

for row in range(len(matrix)):
    for col in range(len(matrix[row])):
        if matrix[row][col] == "B":
            bunny_position = (row, col)

start_row, start_col = bunny_position


def find_path(row, col, direction, sum_num = 0):
    if row < 0 or col < 0 or row >= len(matrix) or col >= len(matrix[0]) or matrix[row][col] == 'X':
       big_direction_sum [direction] = sum_num
       return 
      
    if matrix[row][col] != 'B':
        sum_num += int(matrix[row][col])
        if direction not in big_direction:
            big_direction_sum [direction] = 0
            big_direction[direction] = []
        big_direction[direction].append(f'[{row}, {col}]')
        
    if direction == 'right':                            
        find_path(row, col + 1, 'right', sum_num)         
    elif direction == 'left':
        find_path(row, col - 1, 'left', sum_num)
    elif direction == 'up':    
        find_path(row - 1, col, 'up', sum_num )
    elif direction == 'down':
        find_path(row + 1, col, 'down', sum_num)
                                

find_path(start_row, start_col, 'right')
find_path(start_row, start_col, 'left')
find_path(start_row, start_col, 'up')
find_path(start_row, start_col, 'down')

sort_big_direction_sum = dict(sorted(big_direction_sum.items(), key = lambda x: -x[1]))
for key, val in sort_big_direction_sum.items():
    print(key)
    [print(x) for x in big_direction[key]]
    print(val)
    break

 







