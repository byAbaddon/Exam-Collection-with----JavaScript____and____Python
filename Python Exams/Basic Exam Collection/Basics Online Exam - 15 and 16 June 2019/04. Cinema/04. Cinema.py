hall_places = int(input())
all_ticket_price = 0
seats_count = 0

while True:
    try:
        current_places = int(input())
        seats_count += current_places
        if seats_count <= hall_places:
            if current_places % 3 == 0:
                current_places -= 1
            all_ticket_price += current_places * 5
        else:
            break
    except:
        print(f'There are {hall_places - seats_count} seats left in the cinema.\nCinema income - {all_ticket_price} lv.')
        exit()


print(f'The cinema is full.\nCinema income - {all_ticket_price} lv.')
