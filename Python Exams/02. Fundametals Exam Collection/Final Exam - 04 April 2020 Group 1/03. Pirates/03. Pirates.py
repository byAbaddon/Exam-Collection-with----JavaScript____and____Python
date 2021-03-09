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





