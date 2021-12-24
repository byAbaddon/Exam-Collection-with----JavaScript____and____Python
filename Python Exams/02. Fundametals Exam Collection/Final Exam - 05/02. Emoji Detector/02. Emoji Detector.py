from re import findall

text = input()
regex = r"::[A-Z]{1}[a-z]{2,}::|\*\*[A-Z]{1}[a-z]{2,}\*\*"
emo_list = findall(regex, text)
threshold = eval('*'.join(findall(r'\d', text)))

print(f'Cool threshold: {threshold}')
print(f'{len(emo_list)} emojis found in the text. The cool ones are:')

for emo in emo_list:
    if sum([ord(x) for x in emo[2:-2]]) > threshold:
        print(emo)

'''
In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**
-------output:
Cool threshold: 540
4 emojis found in the text. The cool ones are:
::Smiley::
**Tigers**
::Mooning::
'''
