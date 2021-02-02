budget = float(input())
spend_money = 0
buy_item_count = 0

item = input()

while item != 'Stop':
    buy_item_count += 1
    item_price = float(input())

    if buy_item_count % 3 == 0:
      spend_money += item_price / 2
    else:
      spend_money += item_price

    if budget < spend_money:
      print(f"You don't have enough money!\nYou need {spend_money - budget:.2f} leva!")
      exit()

    item = input()

print(f"You bought {buy_item_count} products for {spend_money:.2f} leva.")
