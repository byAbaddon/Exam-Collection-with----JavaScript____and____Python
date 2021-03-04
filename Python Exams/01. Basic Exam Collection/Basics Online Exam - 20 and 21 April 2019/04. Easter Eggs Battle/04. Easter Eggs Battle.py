eggs_one_player = int(input())
eggs_two_player = int(input())

while True:
    current = input()
    if current == 'End of battle':
        print(f'Player one has {eggs_one_player} eggs left.\nPlayer two has {eggs_two_player} eggs left.')
        break

    if current == 'one':
        eggs_two_player -= 1
    elif current == 'two':
        eggs_one_player -= 1

    if eggs_two_player == 0:
        print(f'Player two is out of eggs. Player one has {eggs_one_player} eggs left.')
        break
    elif eggs_one_player == 0:
        print(f'Player one is out of eggs. Player two has {eggs_two_player} eggs left.')
        break
