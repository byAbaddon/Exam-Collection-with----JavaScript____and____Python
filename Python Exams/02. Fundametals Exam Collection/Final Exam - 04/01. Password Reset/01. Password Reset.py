password = input()

while True:
    com, *args = input().split()

    if com == 'Done':
        print(f'Your password is: {password}')
        break

    if com == 'TakeOdd':
        password = ''.join([x for i, x in enumerate(password) if i & 1])
    if com == 'Cut':
        index, length = map(int, args)
        password = password[0: index] + password[index + length:]
    if com == 'Substitute':
        char, substitute = args
        if char in password:
            password = password.replace(char, substitute)
        else:
            print('Nothing to replace!')
            continue
    print(password)


'''
Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr 
TakeOdd
Cut 15 3
Substitute :: -
Substitute | ^
Done

------------------output:
icecream::hot::summer
icecream::hot::mer
icecream-hot-mer
Nothing to replace!
Your password is: icecream-hot-mer
'''