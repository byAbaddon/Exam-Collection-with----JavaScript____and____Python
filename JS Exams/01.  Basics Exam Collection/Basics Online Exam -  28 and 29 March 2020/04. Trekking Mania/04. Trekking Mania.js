function trekkingMania(arg) {
   let groups = Number(arg.shift())
   let all_people = 0
   let [g1, g2, g3, g4, g5] = [0, 0, 0, 0, 0]

   for (let i = 0; i < groups; i++) {
      people = Number(arg.shift())
      all_people += people

      if (people <= 5) {
         g1 += people
      } else if (people >= 6 && people <= 12) {
         g2 += people
      } else if (people >= 13 && people <= 25) {
         g3 += people
      } else if (people >= 26 && people <= 40) {
         g4 += people
      } else {
         g5 += people
      }
   }

   console.log(`${(g1 / all_people * 100).toFixed(2)}%`)
   console.log(`${(g2 / all_people * 100).toFixed(2)}%`)
   console.log(`${(g3 / all_people * 100).toFixed(2)}%`)
   console.log(`${(g4 / all_people * 100).toFixed(2)}%`)
   console.log(`${(g5 / all_people * 100).toFixed(2)}%`)
}

// trekkingMania([
//    10,
//    10,
//    5,
//    1,
//    100,
//    12,
//    26,
//    17,
//    37,
//    40,
//    78,
// ])