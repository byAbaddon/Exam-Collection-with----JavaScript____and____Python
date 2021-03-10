n = int(input())

heroes_dict = {}

for _ in range(n):
    name, hp, mp = [int(x) if x.isdigit() else x  for x in input().split()]
    if name not in heroes_dict:
        hp = 100 if hp > 100 else hp
        mp = 200 if hp > 200 else mp   
        heroes_dict[name] = {'hp': hp, 'mp' : mp}

while True:
    token = [int(x) if x.isdigit() else x  for x in input().split(' - ')]
    if token[0] == 'End':
        break
    elif token[0] == 'CastSpell':
        hero_name = token[1]
        mp_needed = token[2]
        spell_name = token[3]
        if heroes_dict[hero_name]['mp'] >= mp_needed:
            heroes_dict[hero_name]['mp'] -= mp_needed
            mana_points_left = heroes_dict[hero_name]['mp']
            print(f'{hero_name} has successfully cast {spell_name} and now has {mana_points_left} MP!')
        else:
            print(f'{hero_name} does not have enough MP to cast {spell_name}!')
    elif token[0] == 'TakeDamage':
        hero_name = token[1]
        damage = token[2]
        attacker = token[3]
        if heroes_dict[hero_name]['hp'] > damage:
            heroes_dict[hero_name]['hp'] -= damage
            current_hp = heroes_dict[hero_name]['hp']
            print(f'{hero_name} was hit for {damage} HP by {attacker} and now has {current_hp} HP left!')
        else:
            del heroes_dict[hero_name]
            print(f'{hero_name} has been killed by {attacker}!')    
    elif token[0] == 'Recharge':
        hero_name = token[1]
        amount_recovered = token[2]
        if amount_recovered + heroes_dict[hero_name]['mp'] > 200:
            amount_recovered = 200 - heroes_dict[hero_name]['mp']
            print(f'{hero_name} recharged for {amount_recovered} MP!')
            heroes_dict[hero_name]['mp'] = 200 
        else:
            heroes_dict[hero_name]['mp'] += amount_recovered         
            print(f'{hero_name} recharged for {amount_recovered} MP!') 
    elif token[0] == 'Heal':
        hero_name = token[1]
        hp_recovered = token[2]

        update = hp_recovered + heroes_dict[hero_name]['hp']
        if update > 100:
            hp_recovered = 100 - heroes_dict[hero_name]['hp']
            heroes_dict[hero_name]['hp'] += hp_recovered
            print(f'{hero_name} healed for {hp_recovered} HP!')
        else: 
            heroes_dict[hero_name]['hp'] += hp_recovered
            print(f'{hero_name} healed for {hp_recovered} HP!')


sort_heroes_dict = dict(sorted(heroes_dict.items(), key=lambda x: (-x[1]['hp'], x[0])))

for key, val in sort_heroes_dict.items():
    print(f'{key}\n HP: {val["hp"]}\n MP: {val["mp"]}')