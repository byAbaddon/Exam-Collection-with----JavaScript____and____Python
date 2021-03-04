movie_name = ''
total = -10000
subtotal = 0
counter = 0
current_move = input()

while True:
    if current_move == 'STOP': break
    counter += 1
    if counter == 7: break

    for letter in current_move:
        if letter.isupper():
            subtotal += ord(letter) - len(current_move)
        elif letter.islower():
            subtotal += ord(letter) - len(current_move) * 2
        else:
            subtotal += ord(letter)
    if total < subtotal:
        total = subtotal
        movie_name = current_move
    subtotal = 0

    current_move = input()


if counter == 7:
    print('The limit is reached.')
print(f'The best movie for you is {movie_name} with {total} ASCII sum.')



'''
Matrix
Breaking bad
Legend
STOP
'''
