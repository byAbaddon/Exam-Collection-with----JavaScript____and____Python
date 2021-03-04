correct_shots = 0
incorrect_shots = 0
points = 301

player_name = input()
field = input()
current_points = int(input())

while True:
    correct_shots += 1
    if field == 'Triple':
        current_points *= 3
    elif field == 'Double':
        current_points *= 2

    if points >= current_points:
        points -= current_points

    else:
        correct_shots -= 1
        incorrect_shots += 1

    if points == 0:
        break
    else:
        field = input()
        if field == 'Retire': break
        current_points = int(input())


if points == 0:
    print(f'{player_name} won the leg with {correct_shots} shots.')
else:
    print(f'{player_name} retired after {incorrect_shots} unsuccessful shots.')


