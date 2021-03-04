number_players = int(input())
max_points = 0
winner = ''

while number_players:
    number_players -= 1
    current_points = 0
    chef_name = input()
    while True:
        try:
            current_points += int(input())
        except:
            break

    print(f'{chef_name} has {current_points} points.')

    if max_points < current_points:
        max_points = current_points
        winner = f'{chef_name} won competition with {max_points} points!'
        print(f'{chef_name} is the new number 1!')


print(winner)



'''
2
Chef Angelov
9
9
9
Stop
Chef Rowe
10
10
10
10
Stop
'''
