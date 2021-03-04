gim_places = int(input())
visited, bought_products  = 0, 0
data_dict = {'back' : 0, 'chest' : 0, 'legs' : 0, 'abs' : 0, 'protein shake' : 0, 'protein bar' : 0}

for _ in range(gim_places):
    current_data = input().lower()
    data_dict[current_data] += 1

for k,v in data_dict.items():
    print(f'{v} - {k}')
    if k == 'back' or k == 'legs' or k == 'abs' or k == 'chest':
        visited += v
    else:
        bought_products += v

print(f'{visited / gim_places * 100:.2f}% - work out')
print(f'{bought_products / gim_places * 100:.2f}% - protein')


'''
7
Chest
Back
Legs
Legs
Abs
Protein shake
Protein bar

'''
