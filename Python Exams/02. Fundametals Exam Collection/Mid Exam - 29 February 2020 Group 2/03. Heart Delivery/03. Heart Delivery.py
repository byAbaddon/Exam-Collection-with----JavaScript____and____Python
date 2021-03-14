houses = list(map(int ,input().split('@')))
index = 0

while True:
    token = input().split()
    if len(token) == 1:
        break
    else:
        index += int(token[1])
       
    if  index > len(houses) - 1:
        index = 0
         
    houses[index] -= 2
    if houses[index] == 0:
        print(f'Place {index} has Valentine\'s day.')
    elif houses[index] < 0:
        print(f'Place {index} already had Valentine\'s day.')


print(f'Cupid\'s last position was {index}.')
failed_house = len(list(filter(lambda x: x > 0, houses)))
if failed_house == 0:
    print('Mission was successful.')
else:    
    print(f'Cupid has failed {failed_house} places.')
