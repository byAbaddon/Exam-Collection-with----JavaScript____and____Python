function energyBooster(kind, size, count) {
  
const booster = {
  "small" : { "Watermelon" : 56.00 , "Mango" : 36.66, "Pineapple" : 42.10 , "Raspberry" : 20.00},
  "big" : { "Watermelon" : 28.70 , "Mango" : 19.60, "Pineapple" : 24.80 , "Raspberry" : 15.20},
}

let add = 0

size === 'small' ? add = 2 : add = 5
let packet = booster[size][kind] * add * count
packet >= 400 && packet <= 1000 ? packet *= 0.85 : packet > 1000 ? packet *= 0.50 : packet
 
return `${packet.toFixed(2)} lv.` 

}

//console.log(energyBooster('Watermelon','big',4))