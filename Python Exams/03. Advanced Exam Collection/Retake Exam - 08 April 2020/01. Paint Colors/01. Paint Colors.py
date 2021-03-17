import os
os.system('clear')

str_list = input().split()
colors_list = ['yellow', 'blue', 'red', 'orange', 'purple', 'green']
my_colors_list = []

while True:
    try:
        first = str_list.pop(0)
        second  = str_list.pop()
        if first + second in colors_list or second + first in colors_list:
            if first + second in colors_list:
                my_colors_list.append(first + second)
            else:
                my_colors_list.append(second + first)  
        else:
            index = len(str_list) // 2
            if not first[:-1] == '':
                str_list.insert(index, first[:-1])
            if not second[:-1] == '':
                str_list.insert(index, second[:-1])
    except:
        if first in colors_list:
            my_colors_list.append(first)
        break


if 'orange' in my_colors_list:
    if 'red' not in my_colors_list or 'yellow' not in my_colors_list:
      my_colors_list.remove('orange')
elif 'purple' in my_colors_list:
    if 'red' not in my_colors_list or 'blue' not in my_colors_list:
      my_colors_list.remove('purple')
elif 'green' in my_colors_list:
    if 'yellow' not in my_colors_list or 'blue' not in my_colors_list:
      my_colors_list.remove('green')               


print(my_colors_list)

