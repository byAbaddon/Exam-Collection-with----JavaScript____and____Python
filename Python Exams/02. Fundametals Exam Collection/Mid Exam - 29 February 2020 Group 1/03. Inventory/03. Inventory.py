collection = input().split(', ')

while True:
    try:
        command, item = input().split(' - ')

        if command == 'Collect' and item not in collection:
            collection.append(item)    
        elif command == 'Drop' and item in collection:
            collection.remove(item)
        elif command == 'Combine Items':
            old_item, new_item = item.split(':')
            if old_item in collection:
                index = collection.index(old_item)    
                collection.insert(index + 1, new_item)
        else:
            if item in collection:
                index = collection.index(item)       
                element = collection.pop(index)
                collection.append(element)
    except:
        print(', '.join(collection))
        break


