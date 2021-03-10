from re import match, findall

regex = r'@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+'
loop = int(input()) 

for _ in range(loop):
    bar_code = input()
    result = match(regex, bar_code)
    if result: 
        result = result.group()
        product = findall(r'\d+', result)
        if product:
            print(f'Product group: {"".join(product)}')
        else:
            print(f'Product group: 00')    
    else:
        print('Invalid barcode')    




