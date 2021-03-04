budget, nights, price, percent = [float(input()) for _ in range(4)]
subtotal = 0

if nights > 7:
  subtotal = price * 0.95 * nights
else:
  subtotal = price * nights

discount = budget * percent / 100
total = subtotal + discount
final_sum = budget - total

if final_sum < 0:
    print(f'{abs(final_sum):.2f} leva needed.')
else:
    print(f'Ivanovi will be left with {final_sum:.2f} leva after vacation.')



'''
800.50
8
100
2
'''
