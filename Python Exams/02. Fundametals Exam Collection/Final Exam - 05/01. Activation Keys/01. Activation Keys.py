activate_key = input()

while True:
    com, *args = input().split('>>>')
    if com == 'Generate':
        print(f'Your activation key is: {activate_key}')
        break
    if com == 'Contains':
        substring = args[0]
        if substring in activate_key:
            print(f'{activate_key} contains {substring}')
        else:
            print('Substring not found!')
    if com == 'Flip':
        up_low, start, end = [int(x) if x.isdigit() else x for x in args]
        manipulate_part = activate_key[start:end]
        if up_low == 'Upper':
            manipulate_part = manipulate_part.upper()
        else:
            manipulate_part = manipulate_part.lower()
        activate_key = activate_key[:start] + manipulate_part + activate_key[end:]
        print(activate_key)
    if com == 'Slice':
        start, end = map(int, args)
        activate_key = activate_key[0: start] + activate_key[end:]
        print(activate_key)


'''
abcdefghijklmnopqrstuvwxyz
Slice>>>2>>>6
Flip>>>Upper>>>3>>>14
Flip>>>Lower>>>5>>>7
Contains>>>def
Contains>>>deF
Generate

-----------------output:
abghijklmnopqrstuvwxyz
abgHIJKLMNOPQRstuvwxyz
abgHIjkLMNOPQRstuvwxyz
Substring not found!
Substring not found!
Your activation key is: abgHIjkLMNOPQRstuvwxyz

'''
