Easter_cakes = float(input()) * 3.20
egs_packets = float(input())
cookies_kg = float(input())  * 5.40

egs_painting_price =  egs_packets * 12 * 0.15
egs_packets *= 4.35
total_price = Easter_cakes + egs_packets + cookies_kg + egs_painting_price

print(f'{total_price:.2f}')


