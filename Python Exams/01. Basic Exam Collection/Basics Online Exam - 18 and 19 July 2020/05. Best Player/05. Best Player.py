players_obj = {}

while True:
    name = input()
    if name == 'END': break
    goals = int(input())
    players_obj[name] = goals

    if players_obj[name] >= 10:
        break

sort_by_goals = dict(sorted(players_obj.items(), key=lambda x: -x[1]))
best_player = list(sort_by_goals.keys())[0]
goals = players_obj[best_player]

print(f'{best_player} is the best player!')
if goals < 3:
    print(f'He has scored {goals} goals.')
else:
    print(f'He has scored {goals} goals and made a hat-trick !!!')


'''
Neymar
2
Ronaldo
1
Messi
3
END
'''