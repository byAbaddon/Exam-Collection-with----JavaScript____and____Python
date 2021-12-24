items_list = input().split(', ')

while True:
    com, *args = input().split(' - ')
    if com == 'Craft!':
        print(*items_list, sep=', ')
        break

    if com == 'Collect':
        item = args[0]
        if item not in items_list:
            items_list.append(item)

    if com == 'Drop':
        item = args[0]
        if item in items_list:
            items_list = [x for x in items_list if x != item]

    if com == 'Combine Items':
        old_item, new_item = args[0].split(':')
        if old_item in items_list:
            index = items_list.index(old_item)
            items_list.insert(index + 1, new_item)

    if com == 'Renew':
        item = args[0]
        if item in items_list:
            index = items_list.index(item)
            items_list.append(items_list.pop(index))

'''
Iron, Sword
Drop - Bronze
Combine Items - Sword:Bow
Renew - Iron
Craft!
-------------output:
Sword, Bow, Iron
'''