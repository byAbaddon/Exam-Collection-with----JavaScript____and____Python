city= input()
package_type= input()
vip = input()
days= int(input())
vip_member = 0

city_list = ["Bansko", "Borovets", "Varna", "Burgas"]
pack_list = ["noEquipment", "withEquipment", "noBreakfast", "withBreakfast"]

if city not in city_list or package_type not in pack_list:
   print('Invalid input!')
   exit()

if days <= 0:
    print('Days must be positive number!')
    exit()

city_dict = {city:{'withEquipment': 100, 'noEquipment': 80, 'withBreakfast':130, 'noBreakfast':100}}
vip_dict = { vip:{'withEquipment': 10, 'noEquipment':5, 'withBreakfast':12, 'noBreakfast':7}}

if vip == 'yes':
    vip_member = vip_dict[vip][package_type]

if days > 7: days -= 1

hostel = city_dict[city][package_type]
hostel = (hostel * (100 - vip_member)) / 100 * days

print(f'The price is {hostel:.2f}lv! Have a nice time!')


'''
Borovets
noEquipment
yes
6
'''
