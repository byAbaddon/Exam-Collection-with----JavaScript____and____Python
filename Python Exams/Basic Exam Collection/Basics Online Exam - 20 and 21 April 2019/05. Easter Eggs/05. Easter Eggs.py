loop = int(input())
eggs_dict = {'red': 0, 'orange': 0, 'blue': 0, 'green': 0}

for _ in range(loop):
    color = input()
    eggs_dict[color] += 1

print(f'Red eggs: {eggs_dict["red"]}')
print(f'Orange eggs: {eggs_dict["orange"]}')
print(f'Blue eggs: {eggs_dict["blue"]}')
print(f'Green eggs: {eggs_dict["green"]}')

eggs_dict = sorted(eggs_dict.items(), key= lambda x: -x[1])[0]
print(f'Max eggs: {eggs_dict[1]} -> {eggs_dict[0]}')



'''
7
orange
blue
green
green
blue
red
green
'''
