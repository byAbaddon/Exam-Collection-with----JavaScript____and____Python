pirate_ship, war_ship,  = [list(map(int, input().split('>'))) for x in range(2)]
max_health = int(input())


def check_index(ship_type, start_index, end_index=0):
    if 0 <= start_index < len(ship_type) and 0 <= end_index < len(ship_type):
        return True
    return False


while True:
    command, *tokens = input().split()
    if command == 'Retire':
        print(f'Pirate ship status: {sum(pirate_ship)}\nWarship status: {sum(war_ship)}')
        break

    if command == 'Status':
        section_to_repair = len([x for x in pirate_ship if x < max_health * 0.2])
        print(section_to_repair, 'sections need repair.')

    if command == 'Fire':
        index, damage = list(map(int, tokens))
        if check_index(war_ship, index):
            war_ship[index] -= damage
            if war_ship[index] <= 0:
                print('You won! The enemy ship has sunken.')
                exit()

    if command == 'Defend':
        start, end, damage = list(map(int, tokens))
        if check_index(pirate_ship, start, end):
            for index in range(start, end + 1):
                pirate_ship[index] -= int(damage)
                if pirate_ship[index] <= 0:
                    print('You lost! The pirate ship has sunken.')
                    exit()

    if command == 'Repair':
        index, add_health = list(map(int, tokens))
        if check_index(pirate_ship, index):
            pirate_ship[index] += add_health
            if pirate_ship[index] > max_health:
                pirate_ship[index] = max_health

'''
12>13>11>20>66
12>22>33>44>55>32>18
70
Fire 2 11
Fire 8 100
Defend 3 6 11
Defend 0 3 5
Repair 1 33
Status
Retire

-------------output:

2 sections need repair.
Pirate ship status: 135
Warship status: 205
'''
