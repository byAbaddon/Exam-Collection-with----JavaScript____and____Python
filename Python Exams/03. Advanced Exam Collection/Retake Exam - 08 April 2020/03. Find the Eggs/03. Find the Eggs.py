def find_strongest_eggs(*test):
    eggs_list, length = test[0], test[1]
    collection_list = [[] for _ in range(length)]
    strong_eggs_list = []

    index = 0
    for egg in eggs_list:
        collection_list[index].append(egg)
        index += 1
        if index == length:
            index = 0

    for row in collection_list:
        for el in range(len(row)):
            left = row[(len(row) // 2) - 1] 
            middle = row[len(row) // 2]
            right = row[(len(row) // 2) + 1] 
     
        if left < middle > right and left < right:
            strong_eggs_list.append(middle)
    
    return strong_eggs_list

