import os
os.system('clear')
#-----------------------WTF--- Fucking Judge----------------85pts  runtime error ???
key = input()

while True:
    token = [int(x) if x.isdigit() else x for x  in input().split('>>>')]
    if len(token) == 1:
        print('Your activation key is:', key)
        break
    elif len(token) == 2:  #Contains
        searhing_sub = token[1]
        if key.find(searhing_sub) != -1:
            print(f'{key} contains {searhing_sub}')
        else:
            print('Substring not found!') 
    elif len(token) == 3:  # Slice
        start, end  = token[1], token[2]
        key = key[0: start] + key[end: ]
        print(key)
    else: #to  Upper / Lower
        start, end = token[2], token[3]
        if token[1] == 'Upper':
            key = key[0: start] + key[start: end].upper() + key[end: ]       
        else:
            key = key[0: start] + key[start: end].lower() + key[end: ] 
        print(key)        

   