names = input().split(', ')
command= input()
block_count, lost_count = 0, 0


while command != 'Report':
    command_list = command.split(' ')
    action = command_list[0]
    if action =='Blacklist':
        if command_list[1] in names:
            names[names.index(command_list[1])] = 'Blacklisted'
            print(f'{command_list[1]} was blacklisted.')
            block_count += 1
        else:
            print(f'{command_list[1]} was not found.')
    elif action == 'Error':
        if names[int(command_list[1])] != 'Blacklisted' and names[int(command_list[1])] != 'Lost':
            print(f'{names[int(command_list[1])]} was lost due to an error.')
            names[int(command_list[1])] = 'Lost'
            lost_count += 1
    elif action =='Change':
        if 0 <= int(command_list[1]) < len(names):
            print(f'{names[int(command_list[1])]} changed his username to {command_list[2]}.')
            names[int(command_list[1])] = command_list[2]
    command=input()


if command == 'Report':
    print(f'Blacklisted names: {block_count}')
    print(f'Lost names: {lost_count}')
    print(*names)



#-------------------------(2)-------------------------------WTF ???   90pts  runtime error ???
# friends_list = input().split(', ')

# while True:
#     token = input().split()
#     if token[0] == 'Report':
#         break
#     elif token[0] == 'Blacklist':
#         search_name = token[1]
#         if search_name not in friends_list:
#             print(search_name, 'was not found.')
#         else:
#             index = friends_list.index(search_name)
#             friends_list[index] = 'Blacklisted'
#             print(search_name, 'was blacklisted.')
#     elif token[0] == 'Error':
#         index = int(token[1])
#         test_name = friends_list[index]
#         if test_name != 'Blacklisted' and test_name != 'Lost':
#             print(f'{test_name} was lost due to an error.')
#             friends_list[index] = 'Lost'      
#     else:
#         index = int(token[1])
#         new_name = token[2]
#         if index <= len(friends_list) and index >= 0:
#             old_name = friends_list[index]
#             friends_list[index] = new_name
#             print(f'{old_name} changed his username to {new_name}.')


# print('Blacklisted names:', friends_list.count('Blacklisted'))
# print('Lost names:', friends_list.count('Lost'))
# print(*friends_list)