numbers_list = list(map(int, input().split()))
average = sum(numbers_list) // len(numbers_list)
result = sorted([x for x in numbers_list if x > average], reverse=True)[:5]
print(*result if result else 'No')




'''
10 20 30 40 50

---------output:
50 40
'''
