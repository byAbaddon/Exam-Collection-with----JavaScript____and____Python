voucher  = int(input())
count_tickets = 0
count_purchase = 0

while True:
    purchase = input()

    if purchase == 'End' or purchase == '':
        break
    elif len(purchase) > 8:
        f_letter, s_letter = purchase[0:2]
        voucher -= ord(f_letter) + ord(s_letter)
        if voucher >= 0:
            count_tickets += 1
        else:
            break
    elif len(purchase) <= 8:
        f_letter = purchase[0:1]
        voucher -= ord(f_letter)
        if voucher >= 0:
            count_purchase += 1
        else:
            break

print(count_tickets)
print(count_purchase)





