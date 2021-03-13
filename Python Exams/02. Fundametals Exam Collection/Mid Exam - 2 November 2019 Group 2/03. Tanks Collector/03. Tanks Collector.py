tanks_list = input().split(', ')
loop = int(input())

for _ in range(loop):
    token = input().split(', ')
    if token[0] == 'Add':
        tank_name = token[1]
        if tank_name in tanks_list:
            print('Tank is already bought')
        else:
            tanks_list.append(tank_name)
            print('Tank successfully bought')    
    elif token[0] == 'Remove':
        tank_name = token[1] 
        if tank_name in tanks_list:
            tanks_list.remove(tank_name)
            print('Tank successfully sold')
        else:
            print('Tank not found')
    elif token[0] == 'Remove At':
        index = int(token[1])
        if index <= len(tanks_list):
            tank = tanks_list[index]
            tanks_list.remove(tank)
            print('Tank successfully sold')
        else:
            print('Index out of range')                      
    elif token[0] == 'Insert':
        index = int(token[1])
        tank_name = token[2]
        if index <= len(tanks_list):
            if tank_name not in tanks_list:
                tanks_list.insert(index, tank_name)
                print('Tank successfully bought')
            else:
                print('Tank is already bought')             
        else:
            print('Index out of range')       
    

print(', '.join(tanks_list) )