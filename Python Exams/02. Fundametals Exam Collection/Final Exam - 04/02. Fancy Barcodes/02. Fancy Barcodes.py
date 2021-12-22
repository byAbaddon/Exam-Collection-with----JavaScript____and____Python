from re import findall

regex = r'@#+[A-Z]{1}[A-Za-z0-9]{4,}[A-Z{1}]@#+'

for _ in range(int(input())):
    current_code = input()
    result = findall(regex, current_code)
    if not result:
        print('Invalid barcode')
    else:
        group = findall(r'\d', result[0])
        if not group:
            group = '00'
        print(f'Product group: ', *group, sep='')


'''
3
@#FreshFisH@#
@###Brea0D@###
@##Che4s6E@##

-----------output:
Product group: 00
Product group: 0
Product group: 46
'''