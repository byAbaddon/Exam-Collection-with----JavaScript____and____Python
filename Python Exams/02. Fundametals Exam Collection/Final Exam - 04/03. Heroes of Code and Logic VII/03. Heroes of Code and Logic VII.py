class Heroes:
    _HP = 100
    _MP = 200

    def __init__(self, heroes_dict=dict):
        self.heroes_dict = heroes_dict

    def castspell(self, name, mp_pts, spell):
        if self.heroes_dict[name]['mp'] >= int(mp_pts):
            self.heroes_dict[name]['mp'] -= int(mp_pts)
            points_left = self.heroes_dict[name]['mp']
            print(f'{name} has successfully cast {spell} and now has {points_left} MP!')
        else:
            print(f'{name} does not have enough MP to cast {spell}!')

    def takedamage(self, name, damage_hp, attacker):
        self.heroes_dict[name]['hp'] -= int(damage_hp)
        current_hp = self.heroes_dict[name]['hp']
        if current_hp > 0:
            print(f'{name} was hit for {damage_hp} HP by {attacker} and now has {current_hp} HP left!')
        else:
            del self.heroes_dict[name]
            print(f'{name} has been killed by {attacker}!')

    def recharge(self, name, amount_mp):
        if self.heroes_dict[name]['mp'] + int(amount_mp) > Heroes._MP:
            amount_mp = Heroes._MP - self.heroes_dict[name]['mp']
            self.heroes_dict[name]['mp'] = Heroes._MP
        else:
            self.heroes_dict[name]['mp'] += int(amount_mp)
        print(f'{name} recharged for {amount_mp} MP!')

    def heal(self, name, amount_mp):
        if self.heroes_dict[name]['hp'] + int(amount_mp) > Heroes._HP:
            amount_mp = Heroes._HP - self.heroes_dict[name]['hp']
            self.heroes_dict[name]['hp'] = Heroes._HP
        else:
            self.heroes_dict[name]['hp'] += int(amount_mp)
        print(f'{name} healed for {amount_mp} HP!')

    def print_result(self, ):
        sorted_dict = sorted(self.heroes_dict.items(), key=lambda x: (-x[1]['hp'], x[0]))
        for hiro_name, key in sorted_dict:
            print(hiro_name)
            print('  HP:', key['hp'], f'\n', ' MP:', key['mp'])


heroes_collection_dict = {}
number_of_heroes = int(input())
for _ in range(number_of_heroes):
    hero_name, hp, mp = list(map(lambda x: int(x) if x.isdigit() else x, input().split()))
    heroes_collection_dict.update({hero_name: {'hp': hp, 'mp': mp}})

hero = Heroes(heroes_collection_dict)

while True:
    name, *args = input().split(' - ')
    if name == 'End':
        hero.print_result()
        break
    invoke_method = f'hero.{name.lower()}(*args)'
    exec(invoke_method)

'''
4
Adela 90 150
SirMullich 70 40
Ivor 1 111
Tyris 94 61
Heal - SirMullich - 50
Recharge - Adela - 100
CastSpell - Tyris - 1000 - Fireball
TakeDamage - Tyris - 99 - Fireball
TakeDamage - Ivor - 3 - Mosquito
End

-----------------output:

SirMullich healed for 30 HP!
Adela recharged for 50 MP!
Tyris does not have enough MP to cast Fireball!
Tyris has been killed by Fireball!
Ivor has been killed by Mosquito!
SirMullich
  HP: 100
  MP: 40
Adela
  HP: 90
  MP: 200
'''
