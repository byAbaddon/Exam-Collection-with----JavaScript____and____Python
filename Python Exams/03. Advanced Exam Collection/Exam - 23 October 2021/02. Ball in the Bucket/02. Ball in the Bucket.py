SIZE = 6
points = 0
matrix = [list(map(lambda x: int(x) if x.isdigit() else x, input().split())) for _ in range(SIZE)]

for i in range(SIZE // 2):
    token = input()
    row, col = int(token[1:2]), int(token[-2:-1])
    if 0 <= row < SIZE and 0 <= col < SIZE and matrix[row][col] == 'B':
        matrix[row][col] = 0
        for row in range(SIZE):
            points += int(matrix[row][col])

if 100 <= points <= 199:
    print(f'Good job! You scored {points} points, and you\'ve won Football.')
elif 200 <= points <= 299:
    print(f'Good job! You scored {points} points, and you\'ve won Teddy Bear.')
elif points >= 300:
    print(f'Good job! You scored {points} points, and you\'ve won Lego Construction Set.')
else:
    print(f'Sorry! You need {100 - points} points more to win a prize.')

          
'''
10 30 B 4 20 24
7 8 27 23 11 19
13 3 14 B 17 В
12 5 21 22 9 6
B 26 1 28 29 2
25 B 16 15 B 18
(1, 1)
(20, 15)
(4, 0)
--------------------
Sorry! You need 33 points more to win a prize.
'''
