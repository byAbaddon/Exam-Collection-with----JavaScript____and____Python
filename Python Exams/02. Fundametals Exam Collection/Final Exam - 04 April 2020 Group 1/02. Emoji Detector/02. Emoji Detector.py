from re import findall
from functools import reduce 

text = input()
regex_threshold = r'[0-9]'
regex_emoticon = r'(:{2}[A-Z]{1}[a-z]{2,}:{2})|(\*{2}[A-Z]{1}[a-z]{2,}\*{2})'

emoticon_list = findall(regex_emoticon, text)
match_threshold = findall(regex_threshold, text)
sum_threshold = reduce(lambda a, x: a * x, map(int, match_threshold))

print('Cool threshold:', sum_threshold)
print(len(emoticon_list), 'emojis found in the text. The cool ones are:')
sum_letters = 0

for key in emoticon_list:
    for el in key:
        if el:
            sum_letters = sum([ord(x) for x in el if x.isalpha()])
            if sum_letters > sum_threshold:
                if el in key:
                    if el:                  
                        print(el)  
            sum_letters = 0