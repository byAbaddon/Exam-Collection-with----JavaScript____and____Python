import sys

health = 100
bitcoins = 0
count_rooms = 0

for el in input().split('|'):
    count_rooms += 1
    command = el.split()[0]
    pts = int(el.split()[1])

    if command == 'potion':     
        if health + pts > 100:  
            print(f'You healed for {100 - health} hp.')   
            health = 100
        else:
            print(f'You healed for {pts} hp.')   
            health += pts
        print(f'Current health: {health} hp.')
    elif command == 'chest':
        print(f'You found {pts} bitcoins.')
        bitcoins += pts
    else:
        health -= pts
        if health > 0:
            print(f'You slayed {command}.')
        else:    
            print(f'You died! Killed by {command}.')
            print(f'Best room: {count_rooms}')
            sys.exit()


print(f"You've made it!\nBitcoins: {bitcoins}\nHealth: {health}")

