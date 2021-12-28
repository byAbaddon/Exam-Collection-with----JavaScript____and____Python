SIZE = 7
players_dict = {name: {'pts': 501} for name in input().split(', ')}
mtx = [list(map(lambda x: int(x) if x.isdigit() else x, input().split())) for _ in range(SIZE)]

for i in range(1, 100):
    token = input()
    row, col = int(token[1:2]), int(token[-2:-1])
    if 0 <= row < SIZE and 0 <= col < SIZE:
        name = list(players_dict.keys())[0 if i & 1 else 1]

        if mtx[row][col] == 'D':
            players_dict[name]['pts'] -= (mtx[0][col] + mtx[SIZE - 1][col] + mtx[row][0] + mtx[row][SIZE - 1]) * 2
        elif mtx[row][col] == 'T':
            players_dict[name]['pts'] -= (mtx[0][col] + mtx[SIZE - 1][col] + mtx[row][0] + mtx[row][SIZE - 1]) * 3
        elif not mtx[row][col] == 'B':
            players_dict[name]['pts'] -= mtx[row][col]

        if players_dict[name]['pts'] <= 0 or mtx[row][col] == 'B':
            print(f'{name} won the game with {round((i + 0.1) / 2,)} throws!')
            break


'''
George, Hristo
17 8 21 6 13 3 24
16 D D D D D 14
7 D T T T D 15
23 D T B T D 2
9 D T T T D 22
19 D D D D D 10
12 18 4 20 5 11 1
(1, 0)
(2, 3)
(0, 0)
(4, 2)
(5, 1)
(3, 1)
(0, 0)
(2, 3)
---------------------------
Hristo won the game with 4 throws!
'''