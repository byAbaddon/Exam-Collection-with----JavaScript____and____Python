move_name = input()
days = int(input())
tickets_count = int(input())
ticket_price = float(input())
cinema_percent = int(input())

cinema_price = tickets_count * ticket_price  * days
subtotal = cinema_price * cinema_percent / 100
total = cinema_price - subtotal
print(f'The profit from the movie {move_name} is {total:.2f} lv.')


'''
The Jungle
22
20500
9.37
30
'''
