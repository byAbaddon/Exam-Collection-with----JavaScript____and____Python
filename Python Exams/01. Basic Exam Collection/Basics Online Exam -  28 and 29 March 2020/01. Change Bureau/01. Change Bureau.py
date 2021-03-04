bitcoin = float(input()) * 1168
yuan = float(input()) * 0.15 * 1.76
commission = float(input())

sum = ((bitcoin + yuan) / 1.95 ) * (100 - commission ) / 100
print(f'{sum:.2f}') 