loop = int(input())
numbers_list = [int(input()) for _ in range(loop)]

print(f'{len([x for x in numbers_list if x % 2 == 0]) / loop * 100:.2f}%')
print(f'{len([x for x in numbers_list if x % 3 == 0]) / loop * 100:.2f}%')
print(f'{len([x for x in numbers_list if x % 4 == 0]) / loop * 100:.2f}%')

