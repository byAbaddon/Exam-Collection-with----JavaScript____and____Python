cards = input().split(':')
my_cards = []

while True:
    token = input().split()
    if token[0] == 'Ready':
        print(*my_cards)
        break
    elif token[0] == 'Add':
        card = token[1]
        if card in cards:
            index = cards.index(card)
            if index == len(cards):
                print('Card not found.')
                continue  
            get_card = cards.pop(index)
            my_cards.append(get_card)
        else:
            print('Card not found.')    
    elif token[0] == 'Insert':
        card = token[1]
        index = int(token[2])
        if card in cards and index <= len(cards):
            get_index = cards.index(card)
            get_card = cards.pop(get_index)
            my_cards.insert(index, get_card)
        else:
            print('Error!')    
    elif token[0] == 'Remove':
         card = token[1]
         if card in my_cards:
             my_cards.remove(card)
         else:
             print('Card not found.') 
    elif token[0] == 'Swap':
        card_one = token[1]            
        card_two = token[2]
                    
        index_card_one = my_cards.index(card_one)
        index_card_two = my_cards.index(card_two)
        get_card_two = my_cards.pop(index_card_two)
        get_card_one = my_cards.pop(index_card_one) 
        my_cards.insert(index_card_one, get_card_two)
        my_cards.insert(index_card_two, get_card_one)

    elif token[0] == 'Shuffle':
       my_cards =  list(reversed(my_cards))


