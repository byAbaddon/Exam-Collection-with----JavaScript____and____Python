text = input().strip()

while True:
    token = input().split()
    if token[0] == 'Done':
        print(f'Your password is: {text}')
        break
    
    if token[0] == 'TakeOdd':
        text = text[1::2]
        print(text)
    elif token[0] == 'Cut':
        start = int(token[1])
        end = int(token[2])
        text = text[0:start] + text[start + end:]
        print(text)
    elif token[0] == 'Substitute':
        str_one = token[1]
        str_two = token[2]
        if str_one not in text:
            print('Nothing to replace!')
        else:
            for _ in range(3):
                text = text.replace(str_one, str_two)
            print(text)