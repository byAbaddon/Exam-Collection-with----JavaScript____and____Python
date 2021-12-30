clients_list, taxi_list = [list(map(int, input().split(', '))) for _ in range(2)]
total_time = 0

while clients_list and taxi_list:
    client = clients_list.pop(0)
    taxi = taxi_list.pop()
    if taxi >= client:
        total_time += client
    else:
        clients_list.insert(0, client)

if not clients_list:
    print(f'All customers were driven to their destinations\nTotal time: {total_time} minutes')
else:
    print('Not all customers were driven to their destinations')
    print(f'Customers left: {", ".join([str(x) for x in clients_list])}')


'''
4, 6, 8, 5, 1
1, 9, 15, 10, 6
----------------------------------
All customers were driven to their destinations
Total time: 24 minutes
'''
