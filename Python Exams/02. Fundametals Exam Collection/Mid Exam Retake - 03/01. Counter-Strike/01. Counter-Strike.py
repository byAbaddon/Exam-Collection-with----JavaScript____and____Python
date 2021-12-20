energy = int(input())
won_battles = 0

while True:
    strike = input()

    if strike == 'End of battle':
        print(f'Won battles: {won_battles}. Energy left: {energy}')
        break

    if energy < int(strike):
        print(f'Not enough energy! Game ends with {won_battles} won battles and {energy} energy')
        break

    energy -= int(strike)
    won_battles += 1

    if won_battles % 3 == 0:
        energy += won_battles




'''
100
10
10
10
1
2
3
73
10

-------output:
Not enough energy! Game ends with 7 won battles and 0 energy
'''
