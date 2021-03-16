one_bomb_list = [int(x) for x in input().split(', ')]
two_bomb_list = [int(x) for x in input().split(', ')]

bomb_dict = {40 : 'Datura Bombs', 60 :'Cherry Bombs', 120 : 'Smoke Decoy Bombs'}
count_bomb_dict = {'Cherry Bombs' : 0,'Datura Bombs' : 0 , 'Smoke Decoy Bombs' : 0}
successfully_filled_bomb = False
   
while  len(one_bomb_list) > 0 and len(two_bomb_list) > 0:
    bomb_sum =  one_bomb_list[0] + two_bomb_list[-1]
    if bomb_sum in bomb_dict:
        count_bomb_dict[bomb_dict[bomb_sum]] += 1
        del one_bomb_list[0]
        del two_bomb_list[-1]
        if count_bomb_dict['Datura Bombs'] >= 3 and count_bomb_dict['Cherry Bombs'] >= 3 and count_bomb_dict['Smoke Decoy Bombs'] >= 3:
            successfully_filled_bomb = True
            break   
    else:
        two_bomb_list[-1] -= 5 

      
            
if successfully_filled_bomb:
    print('Bene! You have successfully filled the bomb pouch!')
else:
    print("You don't have enough materials to fill the bomb pouch.")
if one_bomb_list:      
     print('Bomb Effects:', str(one_bomb_list)[1:-1])
else:
    print('Bomb Effects: empty')
if  two_bomb_list:
    print('Bomb Casings:', str(two_bomb_list)[1:-1])
else:
    print('Bomb Casings: empty')

for key, val in count_bomb_dict.items():
    print(f'{key}: {val}')



