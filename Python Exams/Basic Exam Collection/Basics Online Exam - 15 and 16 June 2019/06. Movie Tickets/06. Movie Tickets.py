start, end, n = [int(input()) for _ in range(3)]

for a in range(start , end):
    for b in range(1, n):
        for c in range(1, n // 2):
            if a & 1 and (a + b + c) & 1:
                print(f'{chr(a)}-{b}{c}{a}')





