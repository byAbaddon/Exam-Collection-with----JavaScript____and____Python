size = input()
color = input()
count = int(input())

eggs_dict = {
    'Large' : {'Red' : 16, 'Green' : 12, 'Yellow' : 9},
    'Medium' : {'Red' : 13, 'Green' : 9, 'Yellow' : 7},
    'Small' : {'Red' : 9, 'Green' : 8, 'Yellow' : 5},
}

total_sum = eggs_dict[size][color] * count * 0.65
print(f'{total_sum:.2f} leva.')




'''
Large
Red
7
'''
