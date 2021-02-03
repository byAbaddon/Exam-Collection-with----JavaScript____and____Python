pens = int(input()) * 5.80
markers = int(input()) * 7.20
drugs = float(input()) * 1.20
discount = int(input())

total = (pens + markers + drugs) * (100 - discount) / 100
print(f'{total:.3f}')