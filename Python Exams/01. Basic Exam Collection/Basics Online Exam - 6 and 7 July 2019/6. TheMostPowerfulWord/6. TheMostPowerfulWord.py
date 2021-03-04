from math import floor
current_word = input()
collection_list = ['a', 'e', 'i', 'o', 'u', 'y' ,'A', 'E', 'I', 'O','U', 'Y']
most_power_word = ''
most_power_sum = 0

while current_word != 'End of words':

    first_letter = current_word[0:1]
    other_letters_sum = sum([ord(x) for x in current_word])

    if first_letter in collection_list:
        other_letters_sum *= len(current_word)
    else:
        other_letters_sum =  floor(other_letters_sum / len(current_word))

    if most_power_sum <= other_letters_sum:
      most_power_sum = other_letters_sum
      most_power_word = current_word

    current_word = input()


print(f'The most powerful word is {most_power_word} - {most_power_sum}')



'''
But
Some
People
Say
It's
LOVE
End of words
'''
