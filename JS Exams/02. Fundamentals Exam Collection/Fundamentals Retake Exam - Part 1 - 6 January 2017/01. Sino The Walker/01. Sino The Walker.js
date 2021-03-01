function sinoTheWalker(arr) {
  let [h, m, s] = arr.shift().split(':').map(Number)
  let [steps, secPerStep] = arr.map(el => Number(el) % 86400 )
  time = new Date(0, 0, 0, h, m, s + steps * secPerStep)
  return `Time Arrival: ${time.toString().split(' ')[4].substr(0, 8)}`
}

// console.log(sinoTheWalker(['12:30:30', '90', '1', ]))
// console.log(sinoTheWalker(['23:49:13', '5424', '2', ]))
