materials_list, magic_list = [list(map(int, input().split())) for _ in range(2)]
gift_dict = {}

while materials_list and magic_list:
    material = materials_list.pop()
    magic = magic_list.pop(0)

    points = material + magic
    if points < 100:
        if not points & 1:
            magic *= 3
        else:
            magic *= 2
        material *= 2
        points = material + magic
    elif points > 499:
        points /= 2

    if 100 <= points <= 199:
        if 'Gemstone' not in gift_dict:
            gift_dict['Gemstone'] = 0
        gift_dict['Gemstone'] += 1
    elif 200 <= points <= 299:
        if 'Porcelain Sculpture' not in gift_dict:
            gift_dict['Porcelain Sculpture'] = 0
        gift_dict['Porcelain Sculpture'] += 1
    elif 300 <= points <= 399:
        if 'Gold' not in gift_dict:
            gift_dict['Gold'] = 0
        gift_dict['Gold'] += 1
    elif 400 <= points <= 499:
        if 'Diamond Jewellery' not in gift_dict:
            gift_dict['Diamond Jewellery'] = 0
        gift_dict['Diamond Jewellery'] += 1


if 'Gemstone' in gift_dict and 'Porcelain Sculpture' in gift_dict or \
        'Gold' in gift_dict and 'Diamond Jewellery' in gift_dict:
    print('The wedding presents are made!')
else:
    print('Aladdin does not have enough wedding presents.')

if materials_list:
    print('Materials left:', ", ".join([str(x) for x in materials_list]))
if magic_list:
    print('Magic left:', ", ".join([str(x) for x in magic_list]))

[print(f'{k}: {v}') for k, v in sorted(gift_dict.items())]


'''
105 20 30 25
120 60 11 400 10 1

-----------------------
The wedding presents are made!
Magic left: 10, 1
Gemstone: 1
Porcelain Sculpture: 2


'''
