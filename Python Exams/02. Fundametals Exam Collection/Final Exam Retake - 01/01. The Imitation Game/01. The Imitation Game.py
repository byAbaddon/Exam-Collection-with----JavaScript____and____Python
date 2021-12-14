encrypted = input()

while True:
    command, *tokens = input().split('|')
    if command == 'ChangeAll':
        old, new = tokens
        encrypted = encrypted.replace(old, new)
    elif command == 'Insert':
        index, chars = tokens
        encrypted = encrypted[:int(index)] + chars + encrypted[int(index):]
    elif command == 'Move':
        cut = int(tokens[0])
        encrypted = (encrypted + encrypted[0:cut])[cut:]
    else:
        print('The decrypted message is:', encrypted)
        break


'''
zzHe
ChangeAll|z|l
Insert|2|o
Move|3
Decode

----------output:
The decrypted message is: Hello
'''
