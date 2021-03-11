weapon = input().split('|')
while True:
    token = input().split()
    if token[0] == 'Done':
        print(f'You crafted {"".join(weapon)}!')
        break
    elif token[1] == 'Right':
        index = int(token[2])
        if 0 <= index < len(weapon):
           element = weapon.pop(index)
           weapon.insert(index + 1, element)
    elif token[1] == 'Left':
        index = int(token[2])
        if index <= len(weapon) and index > 0:
           element = weapon.pop(index)
           weapon.insert(index - 1, element)
    else:
      check = token[1]
      if check == 'Odd':
        # print(*weapon[0::2])  Fucking Judge
        print(*[weapon[x] for x in range(len(weapon)) if x & 1])
      else:
        # print(*weapon[1::2])   Fucking Judge
        print(*[weapon[x] for x in range(len(weapon)) if not x & 1]) 
         


