tax = int(input())

sneakers = tax * 0.60
outfit = sneakers  * 0.80
ball = outfit / 4
accessories = ball / 5
print(f'{tax +sneakers + outfit + ball + accessories:.2f}')
