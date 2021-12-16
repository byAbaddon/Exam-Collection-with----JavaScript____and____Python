from functools import reduce

plants_dict = {}

for _ in range(int(input())):
    k, v = input().split('<->')
    plants_dict[k] = {'Rarity': int(v), 'Rating': []}

while True:
    command, *args = input().split(': ')
    if command == 'Exhibition':
        break

    try:
        plant, rating = args[0].split(' - ')
    except:
        plant = args[0]

    if plant not in plants_dict:
        print('error')
        continue

    if command == 'Reset':
        plants_dict[plant]['Rating'] = []

    if command == 'Rate':
        plants_dict[plant]['Rating'].append(int(rating))

    if command == 'Update':
        plants_dict[plant]['Rarity'] = int(rating)


def get_average(arr):
    for key, val in plants_dict.items():
        try:
            plants_dict[key]['Rating'] = reduce(lambda a, x: a + x, val['Rating']) / len(val['Rating'])
        except:
            plants_dict[key]['Rating'] = 0
    return plants_dict


get_average(plants_dict)
sort_plants = sorted(plants_dict.items(), key=lambda x: (-x[1]['Rarity'], -x[1]['Rating']))

print('Plants for the exhibition:')
for args in sort_plants:
    plant, obj = args
    print(f"- {plant}; Rarity: {obj['Rarity']}; Rating: {obj['Rating']:.2f}")

'''
3
Arnoldii<->4
Woodii<->7
Welwitschia<->2
Rate: Woodii - 10
Rate: Welwitschia - 7
Rate: Arnoldii - 3
Rate: Woodii - 5
Update: Woodii - 5
Reset: Arnoldii
Exhibition

-----------------------output:

Plants for the exhibition:
- Woodii; Rarity: 5; Rating: 7.50
- Arnoldii; Rarity: 4; Rating: 0.00
- Welwitschia; Rarity: 2; Rating: 7.00

'''
