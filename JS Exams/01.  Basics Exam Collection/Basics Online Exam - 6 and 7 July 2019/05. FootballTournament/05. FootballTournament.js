function footballTournament(arg) {
  let fClub =  arg[0]
  let match =  +arg[1]
  let [w, d, l] = [0, 0, 0]
  let [wP, dP, lP] = [0, 0, 0]
 
  if (match === 0) {
     console.log(`${fClub} hasn't played any games during this season.`)
     return
  }

for (let i = 2; i < arg.length; i++) {
  switch (arg[i]) {
  case 'W': wP += 3; w++ ; break;
  case 'D': dP += 1; d++ ; break;
  case 'L': lP += 0; l++ ; break;
  }
}

let allPoints = wP + dP + lP
let percent = (w / match ) * 100
console.log(`${fClub} has won ${allPoints} points during this season.`);
console.log(`Total stats:\n## W: ${w}\n## D: ${d}\n## L: ${l}`);
console.log(`Win rate: ${percent.toFixed(2)}%`);
}
//footballTournament(['Barcelona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D',]) 

