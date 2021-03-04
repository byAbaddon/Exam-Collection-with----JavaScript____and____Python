money = float(input())
gender = input()
age = int(input())
sport = input()

gim = {
        'm' :{'Gym' : 42, 'Boxing' : 41, 'Yoga' : 45, 'Zumba' : 34, 'Dances' : 51, 'Pilates' : 39},
        'f' :{'Gym' : 35, 'Boxing' : 37, 'Yoga' : 42, 'Zumba' : 31, 'Dances' : 53, 'Pilates' : 37}
      }

subtotal = gim[gender][sport]

if age <= 19:
 subtotal = subtotal * 0.80

total = abs(money - subtotal)

if money >= subtotal:
    print(f'You purchased a 1 month pass for {sport}.')
else:
    print(f'You don\'t have enough money! You need ${total:.2f} more.')  