game_list = input().split()
elements_tuple = [tuple(x.split()) for x in iter(input, 'end')]
moves = 0

while game_list and elements_tuple:
    moves += 1
    first_index, second_index = list(map(int, elements_tuple.pop(0)))

    if 0 <= first_index < len(game_list) and 0 <= second_index < len(game_list):
        element_one, element_two = game_list[first_index], game_list[second_index]

        if element_one == element_two:
            game_list = [x for i, x in enumerate(game_list) if i != first_index and i != second_index]
            print(f'Congrats! You have found matching elements - {element_one}!')
        else:
            print('Try again!')
    else:
        game_list.insert((len(game_list) + 1) // 2, f'-{moves}a')
        game_list.insert((len(game_list) + 1) // 2, f'-{moves}a')
        print('Invalid input! Adding additional elements to the board')

if not game_list:
    print(f'You have won in {moves} turns!')
else:
    print(f'Sorry you lose :(\n{" ".join(game_list)}')


'''
a 2 4 a 2 4 
0 3 
0 2
0 1
0 1 
end

-------------output:
Congrats! You have found matching elements - a!
Congrats! You have found matching elements - 2!
Congrats! You have found matching elements - 4!
You have won in 3 turns!

'''
