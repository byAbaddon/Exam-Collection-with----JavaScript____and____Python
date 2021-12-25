def stock_availability(items_list, *args):
    com, *items = args
    if com == 'delivery':
        items_list = items_list + items
    elif com == 'sell':
        if not items:
            items_list.pop(0)
        else:
            if type(items[0]) == int:
                items_list = items_list[items[0]:]
            else:
                for item in items:
                    if item in items_list:
                        items_list = list(filter(lambda x: x != item, items_list))
    return items_list

'''
print(stock_availability(["choco", "vanilla", "banana"], "delivery", "caramel", "berry"))
print(stock_availability(["chocolate", "vanilla", "banana"], "delivery", "cookie", "banana"))
print(stock_availability(["chocolate", "vanilla", "banana"], "sell"))
print(stock_availability(["chocolate", "vanilla", "banana"], "sell", 3))
print(stock_availability(["chocolate", "chocolate", "banana"], "sell", "chocolate"))
print(stock_availability(["cookie", "chocolate", "banana"], "sell", "chocolate"))
print(stock_availability(["chocolate", "vanilla", "banana"], "sell", "cookie"))

----------------------------output:
['choco', 'vanilla', 'banana', 'caramel', 'berry']
['chocolate', 'vanilla', 'banana', 'cookie', 'banana']
['vanilla', 'banana']
[]
['banana']
['cookie', 'banana']
['chocolate', 'vanilla', 'banana']
'''