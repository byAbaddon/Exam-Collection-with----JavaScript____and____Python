def shopping_list(budget, **kwargs):
    shopping_cart = []
    if budget < 100:
        return 'You do not have enough budget.'

    for k, v in kwargs.items():
        price, count = map(float, v)
        total_sum = price * count
        if budget >= total_sum and len(shopping_cart) != 5:
            budget -= total_sum
            shopping_cart.append(f'You bought {k} for {total_sum:.2f} leva.')

    return '\n'.join(shopping_cart)


'''
print(shopping_list(100, microwave=(70, 2), skirts=(15, 4), coffee=(1.50, 10), ))
----------------
You bought skirts for 60.00 leva.
You bought coffee for 15.00 leva.
'''