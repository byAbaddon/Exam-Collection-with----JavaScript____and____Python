data_dict = {}

while True:
    try:
        town, people, gold = [int(x) if x.isdigit() else x for x in input().strip().split('||')]
        if town not in data_dict:
            data_dict[town] = {'gold' :gold , 'people': people}
        else:
            data_dict[town]['gold'] += gold
            data_dict[town]['people'] += people
    except:
        break


while True:
    token = input().split('=>')
    if token[0] == 'Sail':
        continue
    if len(token) == 1:
        break
    elif len(token) == 4:
        command, town, people, gold = [int(x) if x.isdigit() else x for x in token]
    else:
        command, town, gold = [int(x) if x.isdigit() else x for x in token]

    if command == 'Plunder':
        if town in data_dict:
            data_dict[town]['gold'] -= int(gold)
            data_dict[town]['people'] -= int(people)
        print(f'{town} plundered! {gold} gold stolen, {people} citizens killed.')
        if data_dict[town]['gold'] <= 0 or data_dict[town]['people'] <= 0:
            del data_dict[town]
            print(f'{town} has been wiped off the map!')
    elif command == 'Prosper':
        if town in data_dict:
            if int(gold) < 0:
                print(f'Gold added cannot be a negative number!')
            else:
                data_dict[town]['gold'] += int(gold)
                print(f'{gold} gold added to the city treasury. {town} now has {data_dict[town]["gold"]} gold.')
       


if data_dict:
    print(f'Ahoy, Captain! There are {len(data_dict)} wealthy settlements to go to:')

    sort_data_dict = dict(sorted(data_dict.items(), key=lambda x:  (-int(x[1]['gold']), x[0]) ))
    for key, val in sort_data_dict.items():

        print(f'{key} -> Population: {val["people"]} citizens, Gold: {val["gold"]} kg')
else:
    print('Ahoy, Captain! All targets have been plundered and destroyed!')
    
    
'''
Tortuga||345000||1250
Santo Domingo||240000||630
Havana||410000||1100
Sail
Plunder=>Tortuga=>75000=>380
Prosper=>Santo Domingo=>180
End
----------output:

Tortuga plundered! 380 gold stolen, 75000 citizens killed.
180 gold added to the city treasury. Santo Domingo now has 810 gold.
Ahoy, Captain! There are 3 wealthy settlements to go to:
Havana -> Population: 410000 citizens, Gold: 1100 kg
Tortuga -> Population: 270000 citizens, Gold: 870 kg
Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
'''

    
