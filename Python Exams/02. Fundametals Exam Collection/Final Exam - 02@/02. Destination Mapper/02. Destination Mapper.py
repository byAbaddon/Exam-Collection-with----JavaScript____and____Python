from re import findall

text = input()
regex = r'=[A-Z]{1}[A-Za-z]{2,}=|\/[A-Z]{1}[A-Za-z]{2,}\/'
result = findall(regex, text)

country = [x[1:-1] for x in result]
print('Destinations:', ', '.join(country))
print('Travel Points:', sum([len(x) for x in country]))


'''
=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=

------------output:
Destinations: Hawai, Cyprus
Travel Points: 11
'''