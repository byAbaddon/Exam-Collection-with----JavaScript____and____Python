win_name = ''
max_point = 0
player_name = input()

while player_name != 'Stop':
    current_points = 0
    for letter in player_name:
        current_number = int(input())

        if ord(letter) == current_number:
          current_points += 10
        else:
          current_points += 2

        if max_point <= current_points:
            max_point = current_points
            win_name = player_name

    player_name = input()


print(f'The winner is {win_name} with {max_point} points!')





'''
Pesho
124
34
111
97
99
Gosho
98
124
88
76
18
Stop

The winner is Gosho with 10 points!
'''


