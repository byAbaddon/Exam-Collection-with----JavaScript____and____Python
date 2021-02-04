name_player_one = input()
name_player_two = input()
points_player_one = 0
points_player_two = 0

while True:
    try:
        card_player_one = int(input())
    except:
        print(f'{name_player_one} has {points_player_one} points')
        print(f'{name_player_two} has {points_player_two} points')
        break
    card_player_two = int(input())

    if card_player_one > card_player_two:
        points_player_one += card_player_one - card_player_two
    elif card_player_one < card_player_two:
        points_player_two += card_player_two - card_player_one
    else:
        print('Number wars!')
        card_player_one = int(input())
        card_player_two = int(input())

        if card_player_one > card_player_two:
            print(f'{name_player_one} is winner with {points_player_one} points')
        else:
            print(f'{name_player_two} is winner with {points_player_two} points')
        break



'''
Desi
Niki
7
5
3
4
3
3
5
3
'''
