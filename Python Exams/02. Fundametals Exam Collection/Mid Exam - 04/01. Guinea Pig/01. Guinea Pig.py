food, hay, cover, kg = [float(input()) * 1000 for x in range(4)]
days = 0

while not days == 30:
    days += 1
    food -= 300
    if days % 2 == 0:
        hay -= food * 0.05
    if days % 3 == 0:
        cover -= kg / 3

    if food <= 0 or hay <= 0 or cover <= 0:
        print('Merry must go to the pet store!')
        exit()

print(f'Everything is fine! Puppy is happy! Food: {food / 1000:.2f}, Hay: {hay/ 1000:.2f}, Cover: {cover/ 1000:.2f}.')


'''
10
5
5.2
1
---------output:

Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87.
'''
