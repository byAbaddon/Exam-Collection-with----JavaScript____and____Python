company = input()
tickets, children_tickets = int(input()), int(input())
ticket_price, tax = float(input()), float(input())

adults = ticket_price + tax
children = ticket_price * 0.3 + tax
all_tickets_price = adults * tickets + children * children_tickets
print(f'The profit of your agency from {company} tickets is {all_tickets_price * 0.2:.2f} lv.')

'''
WizzAir
15
5
120
40

'''