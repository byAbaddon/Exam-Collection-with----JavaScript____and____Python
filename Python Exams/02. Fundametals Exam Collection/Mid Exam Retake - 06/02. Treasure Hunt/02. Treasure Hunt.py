class TreasureHunt:
    def __init__(self, items_list):
        self.items_list = items_list

    def loot(self, items):
        for item in items:
            if item not in self.items_list:
                self.items_list.insert(0, item)

    def drop(self, index):
        index = int(index[0])
        if 0 <= index < len(self.items_list):
            self.items_list.append(self.items_list.pop(index))

    def steal(self, index):
        index = int(index[0])
        print(', '.join(self.items_list[-index:]))
        self.items_list = self.items_list[:-index]

    def yohoho(self):
        if len(self.items_list) == 0:
            print('Failed treasure hunt.')
        else:
            average_sum = sum([len(x) for x in self.items_list]) / len(self.items_list)
            print(f'Average treasure gain: {average_sum:.2f} pirate credits.')


treasure = TreasureHunt(input().split('|'))
while True:
    command, *current_items = input().split(' ')
    if command == 'Yohoho!':
        treasure.yohoho()
        break
    else:
        invoke_method = f'treasure.{command.lower()}({current_items})'
        eval(invoke_method)


 # -----------------------------------------(2)------------------------------
#
# items_list = input().split('|')
# while True:
#     command, *current_items = input().split(' ')
#     if command == 'Loot':
#         for item in current_items:
#             if item not in items_list:
#                 items_list.insert(0, item)
#
#     if command == 'Drop':
#         index = int(current_items[0])
#         if 0 <= index < len(items_list):
#             items_list.append(items_list.pop(index))
#
#     if command == 'Steal':
#         index = int(current_items[0])
#         print(', '.join(items_list[-index:]))
#         items_list = items_list[:-index]
#
#     if command == 'Yohoho!':
#         if len(items_list) == 0:
#             print('Failed treasure hunt.')
#         else:
#             average_sum = sum([len(x) for x in items_list]) / len(items_list)
#             print(f'Average treasure gain: {average_sum:.2f} pirate credits.')
#         break

'''
Gold|Silver|Bronze|Medallion|Cup
Loot Wood Gold Coins
Loot Silver Pistol
Drop 3
Steal 3
Yohoho!

-----------output:

Coal, Diamonds, Silver, Shotgun, Gold, Medals
Failed treasure hunt.
'''
