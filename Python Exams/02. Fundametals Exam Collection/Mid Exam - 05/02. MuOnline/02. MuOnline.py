rooms_list = input().split('|')
health = 100
bitcoins = 0
room_count = 0
for room in rooms_list:
    com, amount = [int(x) if x.isdigit() else x for x in room.split()]
    room_count += 1

    if com == 'potion':
        if health + amount > 100:
            amount = 100 - health
            health = 100
        else:
            health += amount
        print(f'You healed for {amount} hp.\nCurrent health: {health} hp.')

    elif com == 'chest':
        bitcoins += amount
        print(f'You found {amount} bitcoins.')
    else:
        health -= amount
        if health <= 0:
            print(f'You died! Killed by {com}.\nBest room: {room_count}')
            exit()
        else:
            print(f'You slayed {com}.')

print(f'You\'ve made it!\nBitcoins: {bitcoins}\nHealth: {health}')



'''
rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000

'''