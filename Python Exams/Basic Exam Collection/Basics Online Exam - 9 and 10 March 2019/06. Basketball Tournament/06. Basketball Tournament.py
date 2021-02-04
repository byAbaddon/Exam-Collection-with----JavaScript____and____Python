all_game_counter = 0
win, lost = 0, 0

while True:
    tournament_name = input()
    if tournament_name == 'End of tournaments':
        break

    current_game_current = 0
    game_numbers = int(input())

    all_game_counter += game_numbers

    for _ in range(game_numbers):
        current_game_current += 1
        host = int(input())
        guest = int(input())

        if host > guest:
            win += 1
            print(f'Game {current_game_current} of tournament {tournament_name}: win with {host - guest} points.')
        else:
            lost += 1
            print(f'Game {current_game_current} of tournament {tournament_name}: lost with {guest - host} points.')


print(f'{win / all_game_counter * 100:.2f}% matches win')
print(f'{lost / all_game_counter * 100:.2f}% matches lost')


'''
Dunkers
2
75
65
56
73
Fire Girls
3
67
34
83
98
66
45
End of tournaments
'''
