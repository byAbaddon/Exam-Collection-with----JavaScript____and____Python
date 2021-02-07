ceil_games = int(input())
game_list = [ input() for _ in range(ceil_games)]

hearthstone = game_list.count('Hearthstone')
fornite = game_list.count('Fornite')
overwatch = game_list.count('Overwatch')

first_game = hearthstone / ceil_games * 100
second_game = fornite / ceil_games * 100
three_game = overwatch / ceil_games * 100
all_games_sum = abs((first_game + second_game + three_game) - 100)

print(f'Hearthstone - {first_game:.2f}%\nFornite - {second_game:.2f}%\nOverwatch - {three_game:.2f}%')
print(f'Others - {all_games_sum:.2f}%')



'''
4
Hearthstone
Fornite
Overwatch
Counter-Strike
'''
