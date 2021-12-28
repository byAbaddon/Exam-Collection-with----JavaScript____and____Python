def flights(*args):
    flights_dict = {}

    for i in range(0, len(args), 2):
        destination = args[i]
        if destination == 'Finish':
            break
        passengers = args[i + 1]
        if destination not in flights_dict:
            flights_dict[destination] = 0
        flights_dict[destination] += passengers

    return flights_dict

'''
print(flights('Vienna', 256, 'Vienna', 26, 'Morocco', 98, 'Paris', 115, 'Finish', 'Paris', 15))
----
{'Vienna': 282, 'Morocco': 98, 'Paris': 115}
'''