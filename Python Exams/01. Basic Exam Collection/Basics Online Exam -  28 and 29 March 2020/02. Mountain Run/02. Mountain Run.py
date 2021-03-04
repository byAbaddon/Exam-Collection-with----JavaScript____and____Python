import math

record = float(input())
mt = float(input()) 
sec = float(input())
seconds = mt * sec
add_sec = math.floor(mt / 50) * 30
subtotal = seconds + add_sec
time = abs(record - subtotal)

if time > subtotal or record > subtotal:
    print(f'Yes! The new record is {subtotal:.2f} seconds.')
else:
    print(f'No! He was {time:.2f} seconds slower.')



   